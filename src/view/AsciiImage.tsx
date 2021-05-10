import classNames from 'classnames';

interface AsciiImageProps {
    imageSrc: string;
    alt: string;
    className?: string;
}

const AsciiImage = (props: AsciiImageProps) => {
    const lines = props.imageSrc.split('\n').map((line, index) => (
        <div className={classNames('imageLine', props.className)} key={index}>
            {line}
        </div>
    ));
    return (
        <div className={classNames('image', props.className)} 
             role="figure" 
             aria-label={props.alt}>
            {lines}
        </div>
    );
}

export default AsciiImage;