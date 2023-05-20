import { entry } from '@/interfaces';
import mongoose, {Schema, Model} from 'mongoose';

export interface EntryInterface extends entry{
}

const entrySchema = new Schema({
    description: {type: String, required: true},
    createdAt: {type: Number},
    status: {type: String,
        enum: {
            values: ['pending', 'inProgress','finish'],
            message: '{VALUE} no es un estado permitido'
        }
    },
})

const EntryModel: Model<EntryInterface> = mongoose.models.Entry || mongoose.model('Entry', entrySchema);

export default EntryModel;