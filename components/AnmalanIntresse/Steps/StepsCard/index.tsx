type StepsCardProps = {
  number: string
  title: string
  text: string
  line?: boolean
}

const StepsCard = ({
  number,
  title,
  text,
  line,
}: StepsCardProps) => {

  return (
    <div className="relative flex min-h-72 flex-col items-center border-b border-primary/20 px-4 py-12 text-center md:min-h-80 md:border-b-0">

      {line && (
        <div className="absolute left-1/2 top-18.5 hidden h-0.5 w-full bg-primary/40 md:block"></div>
      )}

      <div className="relative z-10 flex size-14 items-center justify-center rounded-full bg-secondary text-2xl font-bold text-primary">
        {number}
      </div>

      <h3 className="mt-9 text-2xl font-bold text-primary">
        {title}
      </h3>

      <p className="mt-6 max-w-72 text-base text-primary">
        {text}
      </p>
    </div>
  )
}

export default StepsCard