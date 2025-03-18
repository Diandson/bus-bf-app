
interface SpacingProps {
  lg: number;
  md: number;
}

export default function Spacing({ lg, md }: SpacingProps) {
  return <div className={`cs_height_lg_${lg} cs_height_${md}`} />;
}
