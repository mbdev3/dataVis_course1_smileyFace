export const Eyes = ({eyeOffsetX,eyeOffsetY,eyeRadius,fill}) => (
  <>
  <circle
        cx={eyeOffsetX}
        cy={-eyeOffsetY}
        r={eyeRadius}
    
      />
  <circle
        cx={-eyeOffsetX}
        cy={-eyeOffsetY}
        r={eyeRadius}
    
      />
  <circle
        cx={eyeOffsetX}
        cy={-eyeOffsetY}
        r={eyeRadius/3}
     fill={fill}
      />
  <circle
        cx={-eyeOffsetX}
        cy={-eyeOffsetY}
        r={eyeRadius/3}
     fill={fill}
      />
    </>
);