export interface IResponse
{
    error : {code : number, message: string},

    item : {
	_id: string,
    name: String,
	type: String,
	period: Number,
	quantity: Number
    }
}