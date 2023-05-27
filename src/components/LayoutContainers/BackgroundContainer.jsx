// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";
import Background from "../../assets/images/DaBg.jpg";
import PageContainer from "./PageContainer";

function BackgroundContainer({ children }) {
  return (
    <div>
      <PageContainer>
        <img
          src={Background}
          alt="background"
          sx={{ display: "flex", position: "absolute" }}
        />
        {children}
      </PageContainer>
    </div>
  );
}

// Typechecking props for the BackgroundContainer
BackgroundContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BackgroundContainer;
