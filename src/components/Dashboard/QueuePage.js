import QueueTable from '../Table/QueueTable';

import queueData from '../../fakeData/queueData';

function QueuePage() {
    return (
        <QueueTable queueData={queueData} />
    );
}

export default QueuePage;