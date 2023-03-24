declare global {
     interface soundFileInterface {
        sid?: Number,
        abbr?: String,
        sound_file?: String
    }

     interface cardFrontInterface
    {
        original_word: String,

        sound?: soundFileInterface,
        transcription: String,
        part_of_speech: String,
        image?:String

    }

     interface cardBackInterface {
        translate_word: String,
        comment?: String,
        example?: String,
    }

    interface wordInterface extends cardFrontInterface, cardBackInterface{
         wid: Number
     }

     interface languageInterface {
         lid: Number,
         code: Number,
         abbr: string,

     }

     interface wordResultInterface {
         original_word: string,
         translate_word: string[],
         sound_file: string
     }
}

export {};