import { useGetPatientDetails, Patient } from "../hooks/useGetPatientDetails";


export const PatientsPage = () => {
    const { data: response, isLoading, refetch } = useGetPatientDetails();

    if ( isLoading ) {
        return (
            <div>LOADING</div>
        )
    }

    if (!response) {
        return (
            <div className="flex flex-col items-center justify-center relative lg:my-52">
                <div className="t-sub text-2xl lg:text-4xl">No Results</div>
                <div className="t-sub text-8xl lg:text-9xl">Found</div>
            </div>
        )
    }


    const data = response as Patient[];



    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 relative">
            {
                Object.values(data).map((value: Patient) => 
                    (
                        <div key={value.id}>
                            {value.name}
                        </div>
                    ))
            }
        </div>
    )
}