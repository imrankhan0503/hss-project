type ContactInfoFormProps = {
    onBack: () => void,
    onSubmit: () => void
}

const ContactInfoForm = ({ onBack, onSubmit }: ContactInfoFormProps) => {
    return (
        <div className="mt-10 flex justify-between">
            <button
                onClick={onBack}
                className="h-14 w-64 rounded-[10px] border-2 border-sky-950/20 text-xl font-bold text-sky-950">
                Tillbaka
            </button>

            <button
                onClick={onSubmit}
                className="h-14 w-64 rounded-[10px] bg-sky-950 text-xl font-bold text-yellow-500">
                Skicka anmälan
            </button>
        </div>
    )
}

export default ContactInfoForm