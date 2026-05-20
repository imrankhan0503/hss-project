type ContactInfoFormProps = {
    onBack: () => void,
    onSubmit: () => void
}

const ContactInfoForm = ({ onBack, onSubmit }: ContactInfoFormProps) => {
    return (
        <form className="space-y-6">

            {/* Parent or family name */}
            <div>
                <label
                    htmlFor="name"
                    className="mb-2 block text-base font-bold text-sky-950">
                    Vårdnadshavares namn
                </label>

                <input
                    id="name"
                    type="text"
                    pattern="^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$"
                    required
                    className="h-14 w-full rounded-xl border border-sky-950/20 bg-sky-950/5 px-5 text-base text-sky-950 outline-none"
                />
            </div>

            {/* E-mail address */}
            <div>
                <label
                    htmlFor="email"
                    className="mb-2 block text-base font-bold text-sky-950">
                    E-Post
                </label>

                <input
                    id="email"
                    type="email"
                    required
                    className="h-14 w-full rounded-xl border border-sky-950/20 bg-sky-950/5 px-5 text-base text-sky-950 outline-none"
                />
            </div>

            {/* Mobile Number */}
            <div>
                <label
                    htmlFor="mobile-number"
                    className="mb-2 block text-base font-bold text-sky-950">
                    Telefonnummer
                </label>

                <input
                    id="mobile-number"
                    type="tel"
                    pattern="[0-9+\s()-]+"
                    required
                    className="h-14 w-full rounded-xl border border-sky-950/20 bg-sky-950/5 px-5 text-base text-sky-950 outline-none"
                />
            </div>

            {/* Optional Message */}
            <div>
                <label
                    htmlFor="message"
                    className="mb-2 block text-base font-bold text-sky-950">
                    Meddelande (valfritt)
                </label>

                <input
                    id="message"
                    type="text"
                    pattern="^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$"
                    className="w-145 h-28 relative bg-sky-950/5 rounded-xl border border-sky-950/20"
                />
            </div>

            <div className="flex justify-between">
                {/* Back to previous page */}
                <button
                    onClick={onBack}
                    className="h-14 w-64 rounded-[10px] border-2 border-sky-950/20 text-xl font-bold text-sky-950">
                    Tillbaka
                </button>

                {/* Submit */}
                <button
                    onClick={onSubmit}
                    className="h-14 w-64 rounded-[10px] bg-sky-950 text-xl font-bold text-yellow-500">
                    Skicka anmälan
                </button>
            </div>

        </form>
    )
}

export default ContactInfoForm