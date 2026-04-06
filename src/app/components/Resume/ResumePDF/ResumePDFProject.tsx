import { View } from "@react-pdf/renderer";
import {
  ResumePDFSection,
  ResumePDFBulletList,
  ResumePDFText,
  ResumePDFLink,
} from "components/Resume/ResumePDF/common";
import { styles, spacing } from "components/Resume/ResumePDF/styles";
import type { ResumeProject } from "lib/redux/types";

export const ResumePDFProject = ({
  heading,
  projects,
  themeColor,
  isPDF,
}: {
  heading: string;
  projects: ResumeProject[];
  themeColor: string;
  isPDF: boolean;
}) => {
  return (
    <ResumePDFSection themeColor={themeColor} heading={heading}>
      {projects.map(({ project, date, descriptions }, idx) => (
        <View key={idx}>
          <View
            style={{
              ...styles.flexRowBetween,
              marginTop: spacing["0.5"],
            }}
          >
            <View style={styles.flexRow}>
              <ResumePDFText bold={true}>{project}</ResumePDFText>
              {projects[idx].url && (
                <ResumePDFLink 
                  isPDF={isPDF}
                  src={projects[idx].url!.startsWith("http") ? projects[idx].url! : `https://${projects[idx].url}`}
                >
                  <ResumePDFText style={{ fontSize: '9pt', color: themeColor, marginLeft: spacing['1'] }}>
                    [Link]
                  </ResumePDFText>
                </ResumePDFLink>
              )}
            </View>
            <ResumePDFText>{date}</ResumePDFText>
          </View>
          <View style={{ ...styles.flexCol, marginTop: spacing["0.5"] }}>
            <ResumePDFBulletList items={descriptions} />
          </View>
        </View>
      ))}
    </ResumePDFSection>
  );
};
