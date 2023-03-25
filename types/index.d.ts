import {password} from "iron-webcrypto";
import {b} from "vite-node/types-e288fc62";

declare global {
     interface SoundFileInterface {
        sid?: Number,
        abbr?: String,
        sound_file?: String
    }

     interface CardFrontInterface
    {
        original_word: String,

        sound?: SoundFileInterface,
        transcription: String,
        part_of_speech: String,
        image?:String

    }

     interface CardBackInterface {
        translate_word: String,
        comment?: String,
        example?: String,
    }

    interface WordInterface extends CardFrontInterface, CardBackInterface{
         wid: Number
     }

     interface LanguageInterface {
         lid: Number,
         code: Number,
         abbr: string,

     }

     interface WordResultInterface {
         original_word: string,
         translate_word: string[],
         sound_file: string
     }

    interface LoginUser {
         email: string,
        password: string
    }

    interface AuthUser {
         email: string,
        name: string,
        password: string,
        repeat_password: string
    }

    interface UserInterface extends Omit<LoginUser, 'password'> {
         uid: string,
        name: string,
        created_at: string,
        gender?:string
    }

    interface InputsGroup {
         nameInput: string,
        typeInput: string,
        isError: boolean,
        text: string,
        value: string,
        errorMessage: string
    }
}

export {};