import ResidenceMonographLayout from "@/components/ResidenceMonographLayout";
import { getResidenceBySlug } from "@/data/signatureResidences";

const CedarHorizon = () => {
  const residence = getResidenceBySlug("cedar-horizon")!;
  return <ResidenceMonographLayout residence={residence} />;
};

export default CedarHorizon;
