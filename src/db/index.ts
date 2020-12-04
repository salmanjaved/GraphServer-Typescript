import { Logger } from '@overnightjs/logger';
import mongoose from 'mongoose'


export default () => {
    mongoose.Promise = global.Promise

    mongoose
        .connect('mongodb://localhost/my_database', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        .then(() => {
            Logger.Info('DATABASE CONNECTED')
        }).catch((err: any) => {
            Logger.Err(err)
        })
}
