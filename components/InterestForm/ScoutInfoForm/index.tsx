type ScoutInfoFormProps = {
    onNext: () => void
}

const ScoutInfoForm = ({ onNext }: ScoutInfoFormProps) => {
    return (
        <>
            <button
                onClick={onNext}
                className="h-14 w-full rounded-xl bg-sky-950 text-xl font-bold text-yellow-500"  >
                Nästa
            </button>
        </>
    )
}

export default ScoutInfoForm