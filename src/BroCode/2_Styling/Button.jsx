// MODULES STYLING
//import styles from './Button.module.css'


function Button() {

    // INLINE STYLING

    
     const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
      }
    

    return (
        // EXTERNAL STYLING (the file is not in a Folder)
        //<button className="button">Click Me</button>
        

        //MODULES STYLING
        //<button className={styles.button}>Click Me</button>

        //INLINE STYLING
        <button style={styles}>Click Me</button>
    )

}

export default Button