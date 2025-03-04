const SectionHeading = ({
  SectionSubtitle,
  SectionTitle,
  SectionDescription,
  variant,
  textColor,
}) => {
  return (
    <div className={`cs_section_heading cs_style_1 p-2 px-5  ${variant ? variant : ''}`}>
      <div className="cs_section_heading_left" data-aos="fade-up" data-aos-duration={800} data-aos-offset={100}>
        <p className="cs_section_subtitle cs_accent_color" >
          <span className="cs_shape_left" />
          {SectionSubtitle}
          {variant === 'text-center' && (
            <span className="cs_shape_right"></span>
          )}
        </p>
        <h2
          className={`font-bold text-xl sm:text-xl lg:text-4xl md:text-3xl xl:text-5xl cs_section_title ${textColor ? textColor : ''}`}
          dangerouslySetInnerHTML={{ __html: SectionTitle }}
        />
      </div>
      {SectionDescription && (
        <div
          className={`cs_section_heading_right ${textColor ? textColor : ''}`}
          dangerouslySetInnerHTML={{ __html: SectionDescription }}
        />
      )}
    </div>
  );
};

export default SectionHeading;
