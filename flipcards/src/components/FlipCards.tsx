import rick from '../data/img.jpg'

const FlipCards = () => {
  return (
   <div className=' columns-4 gap-8'>
      <div className='min-w-full w-full sm'>
         <div className=''>
            <img src={rick} alt="foto delantera" />
         </div>
         <div>
            <h2>parte tracera</h2>
            <p>resumen de la carta</p>
         </div>
      </div>
   </div>
  )
}

export default FlipCards
