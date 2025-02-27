import {FC, useEffect, useState} from 'react';
import {useTests} from '../../entities/Test/model/hooks/useTests.ts';
import {ITest} from '../../entities/Test/model/types/test.interface.ts';

interface Props {
}

export const Dashboard: FC<Props> = () => {

    const [isError, setIsError] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [tests, setTests] = useState<ITest[]>([])

    const {getTests} = useTests()

    useEffect(() => {
        getTests()
            .then(res => {
                setTests(res)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err);
                setIsError(true)
            })
    }, [])

    if (isError) {
        return <p>Error :(</p>
    }

    console.log(tests)

    return isLoading ? <div>Loading</div> : (
        <div>
            <input type="text" placeholder={'search'}/>
            <ul>
                <li>
                    <p>Name</p>
                    <p>Type</p>
                    <p>Status</p>
                    <p>Site</p>
                </li>
                {tests.map(test => <li key={test.id}>
                    <p>{test.name}</p>
                    <p>{test.type}</p>
                    <p>{test.status}</p>
                    <p>{test.siteName}</p>
                </li>)}
            </ul>
        </div>
    );
};