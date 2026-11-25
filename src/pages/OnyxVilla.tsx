import ResidenceMonographLayout from "@/components/ResidenceMonographLayout";
import { getResidenceBySlug } from "@/data/signatureResidences";

const OnyxVilla = () => {
  const residence = getResidenceBySlug("onyx-villa")!;
  return <ResidenceMonographLayout residence={residence} />;
};

export default OnyxVilla;
