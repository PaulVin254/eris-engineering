import ResidenceMonographLayout from "@/components/ResidenceMonographLayout";
import { getResidenceBySlug } from "@/data/signatureResidences";

const BronzeVertical = () => {
  const residence = getResidenceBySlug("bronze-vertical")!;
  return <ResidenceMonographLayout residence={residence} />;
};

export default BronzeVertical;
