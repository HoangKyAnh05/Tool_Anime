// Authentic IELTS Academic Writing Task 1 Reports with 5-Sentence Band 8.5+ Precision Models

import { QASentence } from './qa1000Data';

export interface WritingTask1Item {
  id: number;
  chartType: 'Line Graph' | 'Bar Chart' | 'Pie Chart' | 'Table' | 'Process Diagram' | 'Map Transformation';
  topic: string;
  category: string;
  question: string;
  questionVi: string;
  sentences: QASentence[];
}

export const WRITING_TASK1_DATA: WritingTask1Item[] = [
  {
    id: 1,
    chartType: "Line Graph",
    topic: "Global Renewable vs Fossil Fuel Energy Consumption (2000 - 2030)",
    category: "Energy",
    question: "[Writing Task 1 Academic - Line Graph] The line graph illustrates global energy consumption patterns from renewable and fossil fuel sources between 2000 and 2030, with projections beyond 2024. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
    questionVi: "[Writing Task 1 - Biểu Đồ Đường] Biểu đồ đường minh họa mô hình tiêu thụ năng lượng toàn cầu từ các nguồn tái tạo và nhiên liệu hóa thạch từ năm 2000 đến năm 2030, kèm dự phóng sau năm 2024. Hãy tóm tắt thông tin bằng cách chọn lọc và báo cáo các đặc điểm chính, đồng thời thực hiện so sánh đối chiếu.",
    sentences: [
      {
        stepIndex: 1,
        role: "Câu 1/5: Paraphrase Mở Bài Chuẩn Academic Task 1",
        roleEn: "Academic Introduction Paraphrase",
        en: "The line graph delineates comparative historical data and projected trends in global energy consumption derived from fossil fuels and renewable sources over a thirty-year timeline spanning from 2000 to 2030.",
        vi: "Biểu đồ đường phác thảo dữ liệu so sánh lịch sử và xu hướng dự báo về mức tiêu thụ năng lượng toàn cầu có nguồn gốc từ nhiên liệu hóa thạch và các nguồn tái tạo trong khung thời gian ba mươi năm từ 2000 đến 2030.",
        keyCollocations: ["delineates comparative historical data", "projected trends", "thirty-year timeline"]
      },
      {
        stepIndex: 2,
        role: "Câu 2/5: Tổng Quan (Overview) 2 Điểm Sáng Nổi Bật Nhất",
        roleEn: "High-Level Overview Highlighting Key Trends",
        en: "Overall, while fossil fuels exhibited an initial predominance followed by a steady plateau and projected descent, renewable energy demonstrated an exponential and sustained upward trajectory throughout the period.",
        vi: "Nhìn chung, trong khi nhiên liệu hóa thạch thể hiện sự áp đảo ban đầu theo sau bởi sự chững lại và xu hướng đi xuống theo dự báo, năng lượng tái tạo lại thể hiện một quỹ đạo tăng trưởng lũy thừa và bền vững trong suốt thời kỳ.",
        keyCollocations: ["initial predominance", "steady plateau and projected descent", "exponential upward trajectory"]
      },
      {
        stepIndex: 3,
        role: "Câu 3/5: Thân Bài 1 - Phân Tích Nhiên Liệu Hóa Thạch",
        roleEn: "Body 1 In-depth Data Extraction",
        en: "In 2000, fossil fuel consumption stood at a commanding 85 million Terawatt-hours (TWh), peaking at approximately 92 million TWh in 2020 before entering a projected contraction toward 70 million TWh by 2030.",
        vi: "Vào năm 2000, mức tiêu thụ nhiên liệu hóa thạch đứng ở mức áp đảo 85 triệu Terawatt-giờ (TWh), đạt đỉnh ở mức xấp xỉ 92 triệu TWh vào năm 2020 trước khi bước vào giai đoạn suy giảm dự kiến xuống còn 70 triệu TWh vào năm 2030.",
        keyCollocations: ["stood at a commanding", "peaking at approximately", "projected contraction"]
      },
      {
        stepIndex: 4,
        role: "Câu 4/5: Thân Bài 2 - Phân Tích Năng Lượng Tái Tạo & Điểm Giao Thoa",
        roleEn: "Body 2 Comparative Dynamics & Intersections",
        en: "Conversely, clean energy output commenced at a modest 10 million TWh in 2000, surged quadrupled to 40 million TWh by 2024, and is forecasted to reach near-parity with fossil fuels at 68 million TWh by the final year.",
        vi: "Ngược lại, sản lượng năng lượng sạch bắt đầu ở mức khiêm tốn 10 triệu TWh vào năm 2000, tăng vọt gấp bốn lần lên 40 triệu TWh vào năm 2024, và được dự báo sẽ tiệm cận mức cân bằng với nhiên liệu hóa thạch ở mức 68 triệu TWh vào năm cuối cùng.",
        keyCollocations: ["commenced at a modest", "surged quadrupled", "reach near-parity with"]
      },
      {
        stepIndex: 5,
        role: "Câu 5/5: Đúc Kết Tương Quan & Tốc Độ Tăng Trưởng",
        roleEn: "Synthesis & Growth Velocity Verdict",
        en: "Ultimately, the substantial divergence in growth velocity highlights a decisive global transition toward sustainable energy independence over the surveyed three decades.",
        vi: "Cuối cùng, sự phân kỳ đáng kể về tốc độ tăng trưởng làm nổi bật một sự chuyển dịch toàn cầu mang tính quyết định hướng tới sự độc lập năng lượng bền vững qua ba thập kỷ được khảo sát.",
        keyCollocations: ["substantial divergence in growth velocity", "decisive global transition", "sustainable energy independence"]
      }
    ]
  },
  {
    id: 2,
    chartType: "Bar Chart",
    topic: "Remote Working Adoption Across Economic Sectors (2019 vs 2024)",
    category: "Employment",
    question: "[Writing Task 1 Academic - Bar Chart] The bar chart compares the proportion of employees working remotely across five major economic sectors in 2019 and 2024. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
    questionVi: "[Writing Task 1 - Biểu Đồ Cột] Biểu đồ cột so sánh tỷ lệ nhân viên làm việc từ xa qua năm ngành kinh tế chủ chốt trong hai năm 2019 và 2024. Hãy tóm tắt thông tin bằng cách chọn lọc và báo cáo các đặc điểm chính, đồng thời thực hiện so sánh đối chiếu.",
    sentences: [
      {
        stepIndex: 1,
        role: "Câu 1/5: Paraphrase Đề Bài Chuẩn Mực",
        roleEn: "Academic Introduction Paraphrase",
        en: "The comparative bar chart quantifies the percentage of the workforce engaged in remote employment across five key industries in the years 2019 and 2024.",
        vi: "Biểu đồ cột so sánh định lượng tỷ lệ lực lượng lao động tham gia làm việc từ xa trên năm ngành công nghiệp trọng điểm trong các năm 2019 và 2024.",
        keyCollocations: ["quantifies the percentage of the workforce", "remote employment", "five key industries"]
      },
      {
        stepIndex: 2,
        role: "Câu 2/5: Tổng Quan Xu Hướng Chung",
        roleEn: "Comprehensive Overview",
        en: "Overall, remote working rates experienced substantial across-the-board escalation over the five-year timeframe, with Information Technology registering both the highest adoption rate and the most dramatic expansion.",
        vi: "Nhìn chung, tỷ lệ làm việc từ xa đã trải qua sự gia tăng đáng kể trên toàn bộ các ngành trong khung thời gian 5 năm, trong đó ngành Công nghệ Thông tin ghi nhận cả tỷ lệ áp dụng cao nhất lẫn mức độ mở rộng ấn tượng nhất.",
        keyCollocations: ["substantial across-the-board escalation", "registering the highest adoption rate", "dramatic expansion"]
      },
      {
        stepIndex: 3,
        role: "Câu 3/5: Số Liệu Ngành Dẫn Đầu (IT & Finance)",
        roleEn: "Top Performing Sectors Analysis",
        en: "In the IT sector, remote engagement skyrocketed from 22% in 2019 to an astounding 74% in 2024, closely mirrored by Financial Services which surged from 18% to 62%.",
        vi: "Trong lĩnh vực CNTT, mức độ làm việc từ xa tăng vọt từ 22% năm 2019 lên mức đáng kinh ngạc 74% vào năm 2024, được phản ánh chặt chẽ bởi Dịch vụ Tài chính vốn tăng từ 18% lên 62%.",
        keyCollocations: ["skyrocketed from", "astounding 74%", "closely mirrored by"]
      },
      {
        stepIndex: 4,
        role: "Câu 4/5: Số Liệu Ngành Tụt Hậu (Manufacturing & Healthcare)",
        roleEn: "Lagging Sectors & Discrepancies",
        en: "In stark contrast, Manufacturing and Healthcare exhibited far more modest increments, rising from 5% to 14% and 8% to 19% respectively, constrained by the intrinsic necessity for physical onsite presence.",
        vi: "Trái lại, Sản xuất và Chăm sóc Sức khỏe thể hiện mức tăng khiêm tốn hơn nhiều, lần lượt tăng từ 5% lên 14% và 8% lên 19%, bị hạn chế bởi nhu cầu tất yếu phải có mặt trực tiếp tại hiện trường.",
        keyCollocations: ["in stark contrast", "modest increments", "constrained by physical onsite presence"]
      },
      {
        stepIndex: 5,
        role: "Câu 5/5: Đúc Kết Mối Tương Quan Cấu Trúc",
        roleEn: "Structural Synthesis",
        en: "In summary, knowledge-intensive white-collar sectors demonstrated far higher elasticity for remote decentralization compared to manual and operational vocations.",
        vi: "Tóm lại, các lĩnh vực văn phòng thâm dụng tri thức thể hiện độ co giãn cao hơn nhiều đối với việc phi tập trung hóa làm việc từ xa so với các ngành nghề lao động chân tay và vận hành.",
        keyCollocations: ["knowledge-intensive white-collar sectors", "higher elasticity for decentralization", "operational vocations"]
      }
    ]
  },
  {
    id: 3,
    chartType: "Process Diagram",
    topic: "Industrial Desalination & Potable Water Purification Process",
    category: "Technology",
    question: "[Writing Task 1 Academic - Process Diagram] The diagram illustrates the multistage reverse osmosis process utilized in industrial desalination plants to convert seawater into safe municipal drinking water. Summarise the information by selecting and reporting the main features.",
    questionVi: "[Writing Task 1 - Sơ Đồ Quy Trình] Sơ đồ minh họa quy trình thẩm thấu ngược nhiều giai đoạn được sử dụng trong các nhà máy khử mặn công nghiệp để biến nước biển thành nước uống sinh hoạt an toàn cho đô thị. Hãy tóm tắt thông tin bằng cách chọn lọc và báo cáo các đặc điểm chính.",
    sentences: [
      {
        stepIndex: 1,
        role: "Câu 1/5: Paraphrase Toàn Bộ Quy Trình",
        roleEn: "Process Introduction Paraphrase",
        en: "The flow diagram details the sequential multistep engineering process by which raw ocean seawater is desalinated, purified, and mineralized into safe municipal potable water.",
        vi: "Sơ đồ dòng chảy trình bày chi tiết quy trình kỹ thuật tuần tự gồm nhiều bước qua đó nước biển thô được khử mặn, tinh lọc và khoáng hóa thành nước uống sinh hoạt an toàn cho đô thị.",
        keyCollocations: ["sequential multistep engineering process", "raw ocean seawater is desalinated", "potable water"]
      },
      {
        stepIndex: 2,
        role: "Câu 2/5: Tổng Quan Các Giai Đoạn Cốt Lõi",
        roleEn: "High-Level Process Overview",
        en: "Overall, the complete cycle comprises three primary operational phases: initial micro-filtration pretreatment, high-pressure semi-permeable membrane reverse osmosis, and post-treatment chemical stabilization.",
        vi: "Nhìn chung, chu trình hoàn chỉnh bao gồm ba giai đoạn vận hành chủ đạo: tiền xử lý vi lọc ban đầu, thẩm thấu ngược qua màng bán thấm áp suất cao, và ổn định hóa học hậu xử lý.",
        keyCollocations: ["three primary operational phases", "micro-filtration pretreatment", "semi-permeable membrane reverse osmosis"]
      },
      {
        stepIndex: 3,
        role: "Câu 3/5: Thân Bài 1 - Giai Đoạn Hút Nước & Tiền Xử Lý",
        roleEn: "Intake & Pretreatment Phase",
        en: "The procedure commences with seawater extraction via submerged seabed intakes, followed by rapid coagulation and multi-media filtration to eliminate coarse organic particulates and sand.",
        vi: "Quy trình bắt đầu bằng việc hút nước biển qua các đường ống ngầm dưới đáy biển, tiếp theo là quá trình keo tụ nhanh và lọc qua nhiều tầng vật liệu để loại bỏ các hạt cát và tạp chất hữu cơ thô.",
        keyCollocations: ["procedure commences with", "rapid coagulation", "multi-media filtration"]
      },
      {
        stepIndex: 4,
        role: "Câu 4/5: Thân Bài 2 - Khử Muối Thẩm Thấu Ngược",
        roleEn: "High-Pressure Membrane Desalination",
        en: "Subsequently, high-pressure pumps force the pretreated saline solution through dense polyamide membranes, separating crystal-clear permeate from hyper-saline brine which is safely dispersed back into the deep ocean.",
        vi: "Tiếp đó, các máy bơm cao áp đẩy dung dịch nước muối đã qua xử lý sơ bộ qua các màng polyamide dày đặc, tách nước ngọt tinh khiết ra khỏi nước muối siêu mặn vốn được phân tán an toàn trở lại đại dương sâu.",
        keyCollocations: ["high-pressure pumps force", "dense polyamide membranes", "hyper-saline brine"]
      },
      {
        stepIndex: 5,
        role: "Câu 5/5: Hậu Xử Lý & Đưa Vào Mạng Lưới Cấp Nước",
        roleEn: "Post-Treatment Mineralization & Distribution",
        en: "In the concluding stage, essential minerals such as calcium and chlorine are infused for optimal taste and disinfection before the finalized potable water is pumped into municipal distribution reservoirs.",
        vi: "Ở giai đoạn cuối cùng, các khoáng chất thiết yếu như canxi và clo được bổ sung để mang lại hương vị tối ưu và khử trùng trước khi nước uống thành phẩm được bơm vào các bể chứa phân phối đô thị.",
        keyCollocations: ["concluding stage", "essential minerals infused", "municipal distribution reservoirs"]
      }
    ]
  }
];

export function getWritingTask1Item(index: number): WritingTask1Item {
  const baseItem = WRITING_TASK1_DATA[(index - 1) % WRITING_TASK1_DATA.length];
  return {
    ...baseItem,
    id: index
  };
}
