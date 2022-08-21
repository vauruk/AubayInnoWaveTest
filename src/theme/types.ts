export interface ITheme {
	primaryColor: string;
	secondaryColor: string;
	backgroundColor: string;
	bgButtonColor: string;
	white: string;
	black: string;
	blue: string;
	gray2: string;
	ligthGrayColor: string;
	errorColor: string;
	successColor: string;
	warningColor: string;
	text: TitleText;
	blogText: TitleText;
	red: TitleText;
	smallText: TitleText;
	titleHeader: TitleText;
	title: TitleText;
	inputError: TitleText;
}

export interface TitleText {
	color: string;
	fontSize: number;
}
