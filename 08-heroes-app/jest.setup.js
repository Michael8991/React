import 'isomorphic-fetch';
import "whatwg-fetch"
import { TextDecoder, TextEncoder } from 'util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;