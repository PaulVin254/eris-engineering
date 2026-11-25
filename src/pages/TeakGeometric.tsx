import ResidenceMonographLayout from "@/components/ResidenceMonographLayout";
import { getResidenceBySlug } from "@/data/signatureResidences";

const TeakGeometric = () => {
  const residence = getResidenceBySlug("teak-geometric")!;
  return <ResidenceMonographLayout residence={residence} />;
};

export default TeakGeometric;
