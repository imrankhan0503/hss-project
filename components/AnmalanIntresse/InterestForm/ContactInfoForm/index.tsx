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
                    className="mb-2 block text-base font-bold text-primary">
                    Vårdnadshavares namn
                </label>

                <input
                    id="name"
                    type="text"
                    pattern="^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$"
                    required
                    className="h-14 w-full rounded-xl border border-primary/20 bg-primary/5 px-5 text-base text-primary outline-none"
                />
            </div>

            {/* E-mail address */}
            <div>
                <label
                    htmlFor="email"
                    className="mb-2 block text-base font-bold text-primary">
                    E-Post
                </label>

                <input
                    id="email"
                    type="email"
                    required
                    className="h-14 w-full rounded-xl border border-primary/20 bg-primary/5 px-5 text-base text-primary outline-none"
                />
            </div>

            {/* Mobile Number */}
            <div>
                <label
                    htmlFor="mobile-number"
                    className="mb-2 block text-base font-bold text-primary">
                    Telefonnummer
                </label>

                <input
                    id="mobile-number"
                    type="tel"
                    pattern="[0-9+\s()-]+"
                    required
                    className="h-14 w-full rounded-xl border border-primary/20 bg-primary/5 px-5 text-base text-primary outline-none"
                />
            </div>

            {/* Optional Message */}
            <div>
                <label
                    htmlFor="message"
                    className="mb-2 block text-base font-bold text-primary"
                >
                    Meddelande (valfritt)
                </label>

                <textarea
                    id="message"
                    rows={4}
                    className="w-full rounded-xl border border-primary/20 bg-primary/5 p-5 text-primary outline-none resize-none"
                />
            </div>

            <div className="flex justify-between gap-4">
                {/* Back to previous page */}
                <button
                    onClick={onBack}
                    className="h-14 w-64 rounded-[10px] border-2 border-primary/20 text-xl font-bold text-primary">
                    Tillbaka
                </button>

                {/* Submit */}
                <button
                    onClick={onSubmit}
                    className="h-14 w-64 rounded-[10px] bg-primary text-xl font-bold text-secondary">
                    Skicka anmälan
                </button>
            </div>

        </form>
    )
}

export default ContactInfoForm