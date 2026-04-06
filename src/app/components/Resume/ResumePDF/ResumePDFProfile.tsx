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
        {[...Object.entries(iconProps), ...(profile.socialLinks || []).map(link => (['social', link] as [string, string]))].map(([key, value], idx) => {
          if (!value) return null;

          let iconType = key as IconType;
          if (key === "url" || key === "social") {
            if (value.includes("github")) {
              iconType = "url_github";
            } else if (value.includes("linkedin")) {
              iconType = "url_linkedin";
            } else {
              iconType = "url";
            }
          }

          const src = value.startsWith("http") ? value : `https://${value}`;
          const label = value.replace(/^https?:\/\//, '').replace(/^www\./, '');

          const Wrapper = ({ children }: { children: React.ReactNode }) => {
            let finalSrc = src;
            if (key === "email") finalSrc = `mailto:${value}`;
            if (key === "phone") finalSrc = `tel:${value.replace(/[^\d+]/g, "")}`;

            return (
              <ResumePDFLink src={finalSrc} isPDF={isPDF}>
                {children}
              </ResumePDFLink>
            );
          };

          return (
            <View
              key={`${key}-${idx}`}
              style={{
                ...styles.flexRow,
                alignItems: "center",
                gap: spacing["1"],
              }}
            >
              <ResumePDFIcon type={iconType} isPDF={isPDF} />
              <Wrapper>
                <ResumePDFText>{label}</ResumePDFText>
              </Wrapper>
            </View>
          );
        })}
      </View>
    </ResumePDFSection>
  );
};
