type Options = {
	capture?: boolean,
	once?: boolean,
	passive?: boolean
};

interface Document {
	addEventListener(type: string, listener: () => any, options: Options): void
}
