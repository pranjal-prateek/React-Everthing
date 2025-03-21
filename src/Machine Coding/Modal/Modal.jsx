import styles from './modal.module.css';

const CustomModal =({title,description,handleClose,children})=>{
  


const handleOutsideClick =(event)=>{
  if(event.target===event.currentTarget){
    handleClose()
  }
}

  return(
    <div className={styles.overLayModal} onClick={handleOutsideClick}>
      <div className={styles.modalContent}>
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.description}>
        {description}
      </div>
      <div className={styles.modalContent}>
        {children}
      </div>
      </div>
    </div>
  )
}
export default CustomModal;