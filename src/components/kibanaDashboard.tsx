interface Props {
  src: string
}

const KibanaDashboard = ({src}: Props) => {

  return <iframe
    src={src}
    height="903" width="1916"/>
};

export default KibanaDashboard;
