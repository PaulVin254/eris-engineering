import ResidenceMonographLayout from "@/components/ResidenceMonographLayout";
import { getResidenceBySlug } from "@/data/signatureResidences";

const QuartzLinear = () => {
  const residence = getResidenceBySlug("quartz-linear")!;
  return <ResidenceMonographLayout residence={residence} />;
};

export default QuartzLinear;
