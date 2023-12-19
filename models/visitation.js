const mongoose = require('mongoose')
import {Schema, Model} from "mongoose"

const Patient = new Schema({
    PatientId:String,
    DateAndTime:String,
    TypeOfEncounter:String,
    PhoneNumber:String,
   
}

)
