type CarouselButtonProps = {
  index: number,
  imageIndex: number,
  onChange(index: number): void
}

const CarouselButton = ({ index, imageIndex, onChange }: CarouselButtonProps) => {
  return (
    <button onClick={() => onChange(index)} className={`h-4 w-4 rounded-full ${imageIndex === index ? 'bg-primary' : 'bg-primary/20'}`} />
  )
}
export default CarouselButton;