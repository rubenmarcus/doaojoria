function walk(node)
{
	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

	v = v.replace(new RegExp('\\b' + 'João Doria' + '\\b', 'gi'), 'PrefeiTOP');
	v = v.replace(new RegExp('\\b' + 'João Dória' + '\\b', 'gi'), 'PrefeiTOP');
	v = v.replace(/\bJoao Dória\b/g, "PrefeiTOP");
	v = v.replace(/\bJoao Doria\b/g, "PrefeiTOP");

	v = v.replace(/\bjoao doria\b/g, "PrefeiTOP");
	v = v.replace(/\bjoão doria\b/g, "PrefeiTOP");
	v = v.replace(/\bjoao dória\b/g, "PrefeiTOP");
	v = v.replace(/\bjoão dória\b/g, "PrefeiTOP");

	v = v.replace(/\bJoao doria\b/g, "PrefeiTOP");
	v = v.replace(/\bJoão doria\b/g, "PrefeiTOP");
	v = v.replace(/\bJoao dória\b/g, "PrefeiTOP");
	v = v.replace(/\bJoão dória\b/g, "PrefeiTOP");

	v = v.replace(/\bjoao Doria\b/g, "PrefeiTOP");
	v = v.replace(/\bjoão Doria\b/g, "PrefeiTOP");
	v = v.replace(/\bjoao Dória\b/g, "PrefeiTOP");
	v = v.replace(/\bjoão Dória\b/g, "PrefeiTOP");

	v = v.replace(/\bJOAO DORIA\b/g, "PrefeiTOP");
	v = v.replace(/\bJOÃO DÓRIA\b/g, "PrefeiTOP");
	v = v.replace(/\bJOAO DORIA\b/g, "PrefeiTOP");
	v = v.replace(/\bJOÃO DORIA\b/g, "PrefeiTOP");
	v = v.replace(/\bJOÃO DÓRIA\b/g, "PrefeiTOP");

	v = v.replace(/\bdoria\b/g, "PrefeiTOP");
	v = v.replace(/\bdória\b/g, "PrefeiTOP");
	v = v.replace(/\bDoria\b/g, "PrefeiTOP");
	v = v.replace(/\bDória\b/g, "PrefeiTOP");
	v = v.replace(/\bJoão Agripino da Costa Dória Junior\b/g, "PrefeiTOP");

	v = v.replace(/\bGestor\b/g, "PrefeiTOP");
	v = v.replace(/\bgestor\b/g, "PrefeiTOP");

	v = v.replace(/\bSérgio Moro\b/g, "$ervo Moro");
	v = v.replace(/\bsergio moro\b/g, "$ervo Moro");
	v = v.replace(/\bSérgio moro\b/g, "$ervo Moro");
	v = v.replace(/\bsérgio Moro\b/g, "$ervo Moro");
	
	textNode.nodeValue = v;
}

walk(document.body);

new MutationObserver(function() {
	walk(document.body);
}).observe(document.body, {
	childList: true
});


