import { useEffect, useState, useRef } from 'react';
import LabelStudio from "label-studio";
import "label-studio/build/static/css/main.css";
import "../../index.css";

const LabelStudioUI = (props) => {
  const [selected, setSelected] = useState(false);
  const [currentTaskId, setCurrentTaskId] = useState(0); // Track the current task ID
  const labelStudioRef = useRef(null); // Store the LabelStudio instance
  const images = [
    process.env.PUBLIC_URL + `/pets.jpg`,
    process.env.PUBLIC_URL + `/pet2.jpg`
  ];

  // Function to initialize Label Studio
  const initializeLabelStudio = (taskId) => {
    labelStudioRef.current = new LabelStudio("label-studio", {
      config: taskId === 0 ?`
        <View>
          <RectangleLabels name="tag" toName="img">
              <Label value="Turtle"></Label>
              <Label value="Parrot"></Label>
              <Label value="Rabbit"></Label>
          </RectangleLabels>
          <Image name="img" value="$image"></Image>
        </View>
      ` : `<View>
            <Choices name="sentiment" toName="img" choice="single" showInLine="true">
              <Choice value="Cat"/>
              <Choice value="Dog"/>
              <Choice value="Bird"/>
            </Choices>
            <Image name="img" value="$image"></Image>
          </View>
      `,
      
      interfaces: [
        "panel",
        "update",
        "submit",
        "controls",
        "skip",
        "instruction",
      ],
      
      user: {
        pk: 1,
        firstName: "James",
        lastName: "Dean"
      },

      task: {
        annotations: [],
        predictions: [],
        id: taskId + 1, // Pass current task ID
        data: {
          image: images[taskId], // Use the current image based on task ID
        }
      },

      onLabelStudioLoad: function (LS) {
        const c = LS.annotationStore.addAnnotation({
          userGenerate: true
        });
        LS.annotationStore.selectAnnotation(c.id);

        setTimeout(() => {
          const submitButton = document.querySelector('.ls-submit-btn');
          
          if (submitButton) {
            // Find the text node inside the button that doesn't have any class (ignoring the icon)
            submitButton.childNodes.forEach((node) => {
              if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
                node.textContent = "Custom Submit Text"; // Change only the text node
              }
            });
          } else {
            console.warn('Submit button not found');
          }
        }, 50); // Adjust the delay if necessary
      },

      onSubmitAnnotation: function (LS, annotation) {
        console.log(annotation.serializeAnnotation());
        setSelected(!selected);
        getAnnotations();

        // Move to the next task by updating task ID
        const nextTaskId = (taskId + 1) % images.length; // Loop through tasks
        setCurrentTaskId(nextTaskId);
      },

      onSkipTask: function (LS) {
        console.log(`Task ${taskId + 1} skipped.`);
        
        // Move to the next task
        const nextTaskId = (taskId + 1) % images.length;
        setCurrentTaskId(nextTaskId);
      }
    });
  };

  // Reinitialize Label Studio when the task ID changes
  useEffect(() => {
    initializeLabelStudio(currentTaskId);
  }, [currentTaskId]); // Dependency on task ID changes

  // annotations can be accessed accordingly, so we can define our own buttons as we like
  const getAnnotations = () => {
    if (labelStudioRef.current) {
      const annotationStore = labelStudioRef.current.annotationStore;
      const selectedAnnotation = annotationStore.selected;
      if (selectedAnnotation) {
        const serializedAnnotation = selectedAnnotation.serializeAnnotation();
        console.log("Another function: ", serializedAnnotation); // This will log the serialized annotation
        return serializedAnnotation;
      }
    }
    return null; // If no annotation is selected
  };

  return (
    <div
      id="label-studio"
      style={{
        backgroundColor: "black",
        padding: 10,
        width: "50%",
        margin: "0 auto"
      }}
    ></div>
  );
}

export default LabelStudioUI;

// import {useRef, useEffect, useState} from 'react';
// import LabelStudio from "label-studio";
// import "label-studio/build/static/css/main.css";

// const LabelStudioUI = (props) => {
//     const [selected, setSelected] = useState(false);
//     const [currentTaskId, setCurrentTaskId] = useState(0); // Track the current task ID
//     const images = [
//       process.env.PUBLIC_URL + `/pets.jpg`,
//       process.env.PUBLIC_URL + `/pet2.jpg`,
//     ];
//     useEffect(() => {
//       let lsInstance = new LabelStudio("label-studio", {
//         config: `
//           <View>
//           <RectangleLabels name="tag" toName="img">
//                 <Label value="Turtle"></Label>
//                 <Label value="Parrot"></Label>
//                 <Label value="Rabbit"></Label>
//             </RectangleLabels>
//             <Image name="img" value="$image"></Image>
//           </View>
//         `,
  
//         interfaces: [
//           "panel",
//           "update",
//           "submit",
//           "controls",
//           "infobar",
//           "topbar",
//           "instruction",
//           "side-column",
//           "annotations:history",
//           "annotation:tabs",
//           "annotations:menu",
//           "annotations:current",
//           "annotations:add-new",
//           "annotations:delete",
//           "annotations:view-all",
//           "predictions:tabs",
//           "predictions:menu"
//         ],
  
//         user: {
//           pk: 1,
//           firstName: "James",
//           lastName: "Dean"
//         },
  
//         task: {
//           annotations: [],
//           predictions: [],
//           id: currentTaskId + 1,
//           data: {
//             image: images[currentTaskId],
//           }
//         },

        
  
//         onLabelStudioLoad: function (LS) {
//           var c = LS.annotationStore.addAnnotation({
//             userGenerate: true
//           });
//           LS.annotationStore.selectAnnotation(c.id);
//         },
//         onSubmitAnnotation: function (LS, annotation) {
//           // retrive an annotation
//           console.log(annotation.serializeAnnotation());
//           setSelected(!selected);
//           // Move to the next task manually
//           const nextTaskId = (currentTaskId + 1) % images.length; // Loop through tasks
//           setCurrentTaskId(nextTaskId);
//         },

//         tasks: images.map((img, index) => ({
//           id: index + 1,
//           data: { image: img }
//         }))
//       });
//     }, [currentTaskId, images]);
  
//     return (
//       <div
//         id="label-studio"
//         style={{
//           backgroundColor: "white",
//           padding: 10,
//           height: "calc(100vh - 250px)",
//           overflowY: "scroll"
//         }}
//       ></div>
//     );
// }

// export default LabelStudioUI;