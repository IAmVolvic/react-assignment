import { useGetPatientDiagnoseHistory } from "../../hooks/useGetPatientDiagnoseHistory";

import { FaDisease } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { Timemat } from "@app/hooks/useTimemat";


interface RemovePatientProps {
    patientId: number;
}

export const PatientDiagnoseHistoryList: React.FC<RemovePatientProps> = ({ patientId }) => {
    const { data: response, isLoading } = useGetPatientDiagnoseHistory(patientId);

    if ( isLoading ) {
        return (
            <tr>
                <th></th>
                <td>
                    <span className="text-lg">Loading</span>
                </td>
                <td></td>
                <th></th>
            </tr>
        )
    }

    if (!response) {
        return (
            <tr>
                <th></th>
                <td>
                    <span className="text-lg">No Data Found</span>
                </td>
                <td></td>
                <th></th>
            </tr>
        )
    }



    return (
        <>
            {response.map((diagnose) => (
                <tr key={diagnose.diagnoseId}>
                    <th>
                        <FaDisease size={"2rem"} />
                    </th>
                    <td>
                        <span className="text-lg">{diagnose.diseaseName}</span>
                    </td>
                    <td>
                        <span className="text-lg">{Timemat(diagnose.diagnoseTimestamp!)}</span>
                    </td>
                    <th>
                        <button ><FaRegEdit size={"1.5rem"} /></button>
                    </th>
                </tr>
            ))}
        </>
    )
}