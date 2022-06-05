import { TransProps } from '.';
declare type ValueTransProps = Pick<TransProps, 'components'> & {
    text: string;
};
export default function TransText({ text, components }: ValueTransProps): any;
export {};
