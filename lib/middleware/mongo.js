const mongoose = require('mongoose');

const mongoConnect = async () => {
    try {
        let urlConnect = "mongodb+srv://finnesko:64v5Jbb3t5UhsGu@example-express-g0sqn.mongodb.net/mongo-express?retryWrites=true&w=majority";
        await mongoose.connect(urlConnect, {useNewUrlParser: true, useUnifiedTopology: true})
    } catch (e) {
        throw e
    }
}

export default mongoConnect;
