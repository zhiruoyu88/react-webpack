import React from 'react'
import {Editor, EditorState, RichUtils} from 'draft-js';

import '../assets/css/RichEditor.css'
import '../assets/css/draft.css'
class StyleButton extends React.Component {
    constructor() {
      super();
      this.onToggle = (e) => {
        e.preventDefault();
        this.props.onToggle(this.props.style);
      };
    }

    render() {
        let className = 'RichEditor-styleButton';
        if (this.props.active) {
            className += ' RichEditor-activeButton';
        }

        return (
            <span className={className} onMouseDown={this.onToggle}>
                {this.props.label}
            </span>
        );
    }
}
export default class Write extends React.Component {
    constructor(props){
        super(props)
        this.state = {editorState: EditorState.createEmpty()};
        
        this.focus = () => this.refs.editor.focus();
        this.onChange = (editorState) => this.setState({editorState});

        this.handleKeyCommand = (command) => this._handleKeyCommand(command);
        this.onTab = (e) => this._onTab(e);
        this.toggleBlockType = (type) => this._toggleBlockType(type);
        this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);
    }
    componentDidMounted(){
	
    }

    _handleKeyCommand(command) {
        const {editorState} = this.state;
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
          this.onChange(newState);
          return true;
        }
        return false;
    }
    _onTab(e) {
        const maxDepth = 4;
        this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
    }

    _toggleBlockType(blockType) {
        this.onChange(
          RichUtils.toggleBlockType(
            this.state.editorState,
            blockType
          )
        );
    }

    _toggleInlineStyle(inlineStyle) {
        this.onChange(
          RichUtils.toggleInlineStyle(
            this.state.editorState,
            inlineStyle
          )
        );
    }
    render(){
        const BlockStyleControls = function(props) {
            const {editorState} = props;
            const selection = editorState.getSelection();
            const blockType = editorState
              .getCurrentContent()
              .getBlockForKey(selection.getStartKey())
              .getType();
            const BLOCK_TYPES = [
                {label: '标题1', style: 'header-one'},
                {label: '标题2', style: 'header-two'},
                {label: '标题3', style: 'header-three'},
                {label: '标题4', style: 'header-four'},
                {label: '标题5', style: 'header-five'},
                {label: '标题6', style: 'header-six'},
                {label: '引用', style: 'blockquote'},
                {label: 'UL', style: 'unordered-list-item'},
                {label: 'OL', style: 'ordered-list-item'},
                {label: 'code', style: 'code-block'},
            ];
            return (
              <div className="RichEditor-controls">
                {BLOCK_TYPES.map((type) =>
                  <StyleButton
                    key={type.label}
                    active={type.style === blockType}
                    label={type.label}
                    onToggle={props.onToggle}
                    style={type.style}
                  />
                )}
              </div>
            );
        };
        var INLINE_STYLES = [
            {label: 'B', style: 'BOLD'},
            {label: 'I', style: 'ITALIC'},
            {label: '下划线', style: 'UNDERLINE'},
            {label: 'Monospace', style: 'CODE'},
        ];
    
        const InlineStyleControls = (props) => {
            var currentStyle = props.editorState.getCurrentInlineStyle();
            return (
              <div className="RichEditor-controls">
                {INLINE_STYLES.map(type =>
                  <StyleButton
                    key={type.label}
                    active={currentStyle.has(type.style)}
                    label={type.label}
                    onToggle={props.onToggle}
                    style={type.style}
                  />
                )}
              </div>
            );
        };

        // If the user changes block type before entering any text, we can
        // either style the placeholder or hide it. Let's just hide it now.
        let className = 'RichEditor-editor';
        var contentState = this.state.editorState.getCurrentContent();
        if (!contentState.hasText()) {
        if (contentState.getBlockMap().first().getType() !== 'unstyled') {
            className += ' RichEditor-hidePlaceholder';
        }
        }
        
        const styleMap = {
            CODE: {
              backgroundColor: 'rgba(0, 0, 0, 0.05)',
              fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
              fontSize: 16,
              padding: 2,
            },
        };
        function getBlockStyle(block) {
            switch (block.getType()) {
              case 'blockquote': return 'RichEditor-blockquote';
              default: return null;
            }
        }
        return(
            <div className="RichEditor-root">
            <BlockStyleControls
              editorState={this.state.editorState}
              onToggle={this.toggleBlockType}
            />
            <InlineStyleControls
              editorState={this.state.editorState}
              onToggle={this.toggleInlineStyle}
            />
            <div className={className} onClick={this.focus}>
              <Editor
                blockStyleFn={getBlockStyle}
                customStyleMap={styleMap}
                editorState={this.state.editorState}
                handleKeyCommand={this.handleKeyCommand}
                onChange={this.onChange}
                onTab={this.onTab}
                placeholder="编写你的文章"
                ref="editor"
                spellCheck={true}
              />
            </div>
          </div>
        )
    }
}