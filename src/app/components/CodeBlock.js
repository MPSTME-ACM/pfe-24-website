const CodeBlock = ({ code, language }) => {
    return (
      <pre className={`language-${language}`}>
        <code>{code}</code>
      </pre>
    );
  };
  
  export default CodeBlock;
  