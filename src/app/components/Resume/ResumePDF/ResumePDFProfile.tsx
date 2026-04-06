import { View } from "@react-pdf/renderer";
import {
  ResumePDFIcon,
  type IconType,
} from "components/Resume/ResumePDF/common/ResumePDFIcon";
import { styles, spacing } from "components/Resume/ResumePDF/styles";
import {
  ResumePDFLink,
  ResumePDFSection,
  ResumePDFText,
} from "components/Resume/ResumePDF/common";
import type { ResumeProfile } from "lib/redux/types";

export const ResumePDFProfile = ({
  profile,
  themeColor,
  isPDF,
}: {
  profile: ResumeProfile;
  themeColor: string;
  isPDF: boolean;
}) => {
  const { name, email, phone, url, summary, location } = profile;
  const iconProps = { email, phone, location, url };

  return (
    <ResumePDFSection style={{ marginTop: spacing["4"] }}>
      <ResumePDFText
        bold={true}
        themeColor={themeColor}
        style={{ fontSize: "20pt" }}
      >
        {name}
      </ResumePDFText>
      {summary && <ResumePDFText>{summary}</ResumePDFText>}
      <View
        style={{
          ...styles.flexRowBetween,
          flexWrap: "wrap",
          marginTop: spacing["0.5"],
          gap: spacing["2"]
        }}
      >
        {Object.entries(iconProps).map(([key, value]) => {
          if (!value) return null;

          return (
            <View
              key={key}
              style={{
                ...styles.flexRow,
                alignItems: "center",
                gap: spacing["1"],
              }}
            >
              <ResumePDFIcon type={key as IconType} isPDF={isPDF} />
              <ResumePDFLink
                src={
                  key === "email"
                    ? `mailto:${value}`
                    : key === "phone"
                      ? `tel:${value.replace(/[^\d+]/g, "")}`
                      : value.startsWith("http")
                        ? value
                        : `https://${value}`
                }
                isPDF={isPDF}
              >
                <ResumePDFText>
                  {value.replace(/^https?:\/\//, "").replace(/^www\./, "")}
                </ResumePDFText>
              </ResumePDFLink>
            </View>
          );
        })}
      </View>
    </ResumePDFSection>
  );
};
