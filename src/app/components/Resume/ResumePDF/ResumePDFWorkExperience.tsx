import { View } from "@react-pdf/renderer";
import {
  ResumePDFSection,
  ResumePDFBulletList,
  ResumePDFText,
  ResumePDFLink,
} from "components/Resume/ResumePDF/common";
import { styles, spacing } from "components/Resume/ResumePDF/styles";
import type { ResumeWorkExperience } from "lib/redux/types";

export const ResumePDFWorkExperience = ({
  heading,
  workExperiences,
  themeColor,
  showBulletPoints = true,
  isPDF,
}: {
  heading: string;
  workExperiences: ResumeWorkExperience[];
  themeColor: string;
  showBulletPoints?: boolean;
  isPDF: boolean;
}) => {
  return (
    <ResumePDFSection themeColor={themeColor} heading={heading}>
      {workExperiences.map(({ company, jobTitle, date, descriptions }, idx) => {
        // Hide company name if it is the same as the previous company
        const hideCompanyName =
          idx > 0 && company === workExperiences[idx - 1].company;

        return (
          <View key={idx} style={idx !== 0 ? { marginTop: spacing["2"] } : {}}>
            {!hideCompanyName && (
              <View style={styles.flexRow}>
                <ResumePDFText bold={true}>{company}</ResumePDFText>
                {workExperiences[idx].url && (
                  <ResumePDFLink 
                    isPDF={isPDF}
                    src={workExperiences[idx].url!.startsWith("http") ? workExperiences[idx].url! : `https://${workExperiences[idx].url}`}
                  >
                    <ResumePDFText style={{ fontSize: '9pt', color: themeColor, marginLeft: spacing['1'] }}>
                      [Link]
                    </ResumePDFText>
                  </ResumePDFLink>
                )}
              </View>
            )}
            <View
              style={{
                ...styles.flexRowBetween,
                marginTop: hideCompanyName
                  ? "-" + spacing["1"]
                  : spacing["1.5"],
              }}
            >
              <ResumePDFText>{jobTitle}</ResumePDFText>
              <ResumePDFText>{date}</ResumePDFText>
            </View>
            <View style={{ ...styles.flexCol, marginTop: spacing["1.5"] }}>
              {showBulletPoints ? (
                <ResumePDFBulletList items={descriptions} />
              ) : (
                descriptions.map((text, i) => (
                  <ResumePDFText key={i}>{text}</ResumePDFText>
                ))
              )}
            </View>
          </View>
        );
      })}
    </ResumePDFSection>
  );
};
