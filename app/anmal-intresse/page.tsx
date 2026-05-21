import Steps from "@/components/AnmalanIntresse/Steps";
import InterestForm from "@/components/AnmalanIntresse/InterestForm";

const AnmalIntresse = () => {
  return (
   <main className="bg-sky-950/5">
  <Steps />

  <div className="flex justify-center px-4 py-16">
    <InterestForm />
  </div>
</main>
  )
}

export default AnmalIntresse;