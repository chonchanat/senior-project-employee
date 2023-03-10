import { useEffect, useState } from 'react';

import { getQueueOneActivity } from '../../api/queueAPI';

import QueueTable from '../Table/QueueTable';

function QueuePage({ code }) {

    const [queueData, setQeueuData] = useState([]);

    useEffect(() => {
        async function getQueue() {
            const data = await getQueueOneActivity(code);
            setQeueuData(data);
        }
        getQueue();
    }, [code])
    return (
        <QueueTable queueData={queueData} />
    );
}

export default QueuePage;