package core

type DungeonsAndDragonsError struct {
	IsDungeonsAndDragonsError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewDungeonsAndDragonsError(code string, msg string, ctx *Context) *DungeonsAndDragonsError {
	return &DungeonsAndDragonsError{
		IsDungeonsAndDragonsError: true,
		Sdk:              "DungeonsAndDragons",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *DungeonsAndDragonsError) Error() string {
	return e.Msg
}
