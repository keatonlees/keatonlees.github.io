// ==================== LIBRARIES ====================
import { motion } from "framer-motion";

// ==================== UTIL ====================
// ==================== COMPONENTS ====================
import { Text } from "../../foundations";

// ==================== STYLES ====================
import "../../App.sass";
import "./Snippet.sass";

// ==================== IMAGES ====================

function Snippet({
  x,
  y,
  variant = "const",
  name = null,
  str = null,
  num = null,
  func = null,
  tag = null,
  comp = null,
  classname = null,
  value = null,
}) {
  switch (variant) {
    case "const":
      return (
        <motion.div
          className="glass snippet"
          style={{ left: x, top: y }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <Text>
            <span className="kwd">const </span>
            <span className="ins">{name} </span>
            <span className="bin">= </span>
            {str && <span className="str">"{str}"</span>}
            {num && <span className="num">{num}</span>}
            <span className="nor">;</span>
          </Text>
        </motion.div>
      );

    case "let":
      return (
        <motion.div
          className="glass snippet"
          style={{ left: x, top: y }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <Text>
            <span className="kwd">let </span>
            <span className="par">{name} </span>
            <span className="bin">= </span>
            {str && <span className="str">"{str}"</span>}
            {num && <span className="num">{num}</span>}
            <span className="nor">;</span>
          </Text>
        </motion.div>
      );

    case "state":
      return (
        <motion.div
          className="glass snippet"
          style={{ left: x, top: y }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <Text>
            <span className="kwd">const [</span>
            <span className="ins">{name}</span>
            <span className="nor">, </span>
            <span className="def">
              set{name[0].toUpperCase()}
              {name.slice(1)}
            </span>
            <span className="kwd">]</span>
            <span className="bin"> = </span>
            <span className="def">useState</span>
            <span className="kwd">(</span>
            {str && <span className="str">"{str}"</span>}
            {num && <span className="num">{num}</span>}
            <span className="kwd">)</span>
          </Text>
        </motion.div>
      );

    case "func":
      return (
        <motion.div
          className="glass snippet"
          style={{ left: x, top: y }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <Text>
            <span className="par">{name}</span>
            <span className="nor">.</span>
            <span className="def">{func}</span>
            <span className="kwd">()</span>
            <span className="nor">;</span>
          </Text>
        </motion.div>
      );

    case "html":
      return (
        <motion.div
          className="glass snippet"
          style={{ left: x, top: y }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <Text>
            <span className="nor">&lt;</span>
            {tag && <span className="par">{tag}</span>}
            {comp && <span className="ins">{comp}</span>}
            {classname && <span className="num"> className</span>}
            {classname && <span className="bin">=</span>}
            {classname && <span className="str">"{classname}"</span>}
            <span className="nor">&gt;</span>
            <span className="nor">{value}</span>
            <span className="nor">&lt;/</span>
            {tag && <span className="par">{tag}</span>}
            {comp && <span className="ins">{comp}</span>}
            <span className="nor">&gt;</span>
          </Text>
        </motion.div>
      );

    case "comment":
      return (
        <motion.div
          className="glass snippet"
          style={{ left: x, top: y }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <Text>
            <span className="com">// {value}</span>
          </Text>
        </motion.div>
      );

    case "if":
      return (
        <motion.div
          className="glass snippet"
          style={{ left: x, top: y }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <Text>
            <span className="kwd">if (</span>
            <span className="par">{name}</span>
            <span className="kwd">) return</span>
            <span className="def"> {value}</span>
            <span className="kwd">()</span>
            <span className="nor">;</span>
          </Text>
        </motion.div>
      );

    default:
      return null;
  }
}

export default Snippet;
