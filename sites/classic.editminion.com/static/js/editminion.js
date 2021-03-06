function percFromRatio(inCount, totalCount, top) {
	var getRatio = (inCount / totalCount) * 1000;
	var percentString = "0% " + ((getRatio / top) * 100).toFixed(0).toString() + '%';
	return percentString;
}

function createGradeLabel(el, text) {
	$('#' + el + '_label').html(el + ":" + text);
}


/*
 * jQuery Highlight Regex Plugin v0.1.2
 */(function(a){var b=function(c){if(!!c&&!!c.childNodes){var d=a.makeArray(c.childNodes),e=null;a.each(d,function(a,d){d.nodeType===3?d.nodeValue===""?c.removeChild(d):e!==null?(e.nodeValue+=d.nodeValue,c.removeChild(d)):e=d:(e=null,d.childNodes&&b(d))})}};a.fn.highlightRegex=function(c,d){typeof c=="object"&&c.constructor.name!=="RegExp"&&(d=c,c=undefined),typeof d=="undefined"&&(d={}),d.className=d.className||"highlight",d.tagType=d.tagType||"span",d.attrs=d.attrs||{},typeof c=="undefined"||c.source===""?a(this).find(d.tagType+"."+d.className).each(function(){a(this).replaceWith(a(this).text()),b(a(this).parent().get(0))}):a(this).each(function(){var e=a(this).get(0);b(e),a.each(a.makeArray(e.childNodes),function(e,f){var g,h,i,j,k,l;b(f);if(f.nodeType==3)while(f.data&&(j=f.data.search(c))>=0){k=f.data.slice(j).match(c)[0];if(k.length>0)g=document.createElement(d.tagType),g.className=d.className,a(g).attr(d.attrs),l=f.parentNode,h=f.splitText(j),f=h.splitText(k.length),i=h.cloneNode(!0),g.appendChild(i),l.replaceChild(g,h);else break}else a(f).highlightRegex(c,d)})});return a(this)}})(jQuery);

/*! Delayed Change Event for jQuery v1.0 | Copyright 2013 Alex King alexking.org | http://www.apache.org/licenses/LICENSE-2.0 */
(function($){$.fn.delayedChange=function(options){var settings=$.extend({delay:2000,eventNamespace:undefined,extra:undefined},options);this.each(function(){var timeoutRef,previousValue,$this=$(this);previousValue=$this.val();$this.on('input propertychange',function(){var val;if(window.event&&event.type=="propertychange"&&event.propertyName!="value"){return}val=$this.val();if(previousValue==val){return}previousValue=val;if(timeoutRef){clearTimeout(timeoutRef)}timeoutRef=setTimeout(function(){var eventName='delayedchange';if($this.val()==val){timeoutRef=undefined;if(settings.eventNamespace){eventName=eventName+'.'+settings.eventNamespace}$this.trigger(eventName,[{delay:settings.delay,eventNamespace:settings.eventNamespace,extra:settings.extra}])}},settings.delay)})});return this}})(jQuery);

// keywordHighlight
(function($) {
  $.fn.extend({
     keywordHighlight: function(options){
         var defaults = {
             highlightClass: 'highlight',
             caseSensitive: 'false'
         }
         var options = $.extend(defaults, options);

         return this.each(function(i, e) {
            var words = $(e).html().split(' ');
            var new_content = '';

            //check for inline data attributes.
            var currentKeyword = options.keyword;
            if($(e).attr("data-keyword"))
                currentKeyword = $(e).attr("data-keyword");

            var currentHighlightClass = options.highlightClass;
            if($(e).attr("data-highlightClass"))
                currentHighlightClass = $(e).attr("data-highlightClass");

            var currentCaseSensitive = options.caseSensitive;
            if($(e).attr("data-caseSensitive"))
                currentCaseSensitive = $(e).attr("data-caseSensitive");
         

            $(words).each(function(i,e) {
                var found = false;
                if(currentCaseSensitive != 'true') {
                    //not case sensitive, so lowercase all and compare.
                    if(e.toLowerCase() == currentKeyword.toLowerCase())
                        found = true;
                }
                else
                {
                    if(e == currentKeyword)
                        found = true;
                }

                if(found) {
                  //add span class around found word and add to new content
                  new_content += '<span class="' + currentHighlightClass + '">' + e + '</span>' + ' ';
                }
                else
                {
                  new_content += e  + ' ';
                }
            }); 
            $(this).html(new_content); //place new content back into the targetted element
         });
     }
  });
})(jQuery);

var wordArray = {
	greek: "abbreviate,abduce,abduct,aberration,abjure,ablution,abnormal,abominable,abrade,abrasion,abrogate,abrupt,absent,absolute,absolve,absorb,absorption,abstain,abstraction,absurdity,abundant,abuse,accede,acceleration,accent,accept,accident,acclaim,accolade,accord,accreditation,accretion,accrue,accurate,accuse,acerbic,acetate,acetic,acetone,acidity,acidosis,acidulation,acidulous,acquaint,acquiesce,acrid,acrimony,acrobatics,acromegaly,acronym,acrophobia,acropolis,acrostic,act,action,acupuncture,adagio,adamant,adamantine,adapt,adduce,adduct,adhere,adhesive,adipose,adjacent,adjudicate,adjutant,admire,admonish,adopt,adoration,adore,adorn,adumbrate,advent,adventure,adverse,adversity,advertise,advocate,aerobic,aerodynamic,aeronautics,aeroplane,aerosol,aesthete,aesthetics,affable,affair,affect,affectation,affiliation,affinity,affix,afflict,affluent,age,agenda,agent,ageusia,agglomerate,agglutination,aggrandize,aggravate,aggregate,aggression,agile,agitate,agnosia,agnostic,agnosticism,agony,agriculture,agroforestry,agronomy,alacrity,albedo,albino,albumen,alias,alibi,alien,allegro,allergen,allergy,alleviate,alliteration,allocate,allocution,allogamy,allograft,allograph,allomorph,allophone,allude,alluvium,almoner,alms,alter,alternate,altimeter,altitude,altruism,amateur,amatory,ambidexterity,ambient,ambiguous,ambit,ambition,ambivalence,ambivalent,ambrosia,ambulance,ambulatory,ameliorate,amelioration,amenable,amend,amendment,amenity,amiable,amicable,amity,amnesia,amnesty,amorous,amorphous,amphibian,ample,amplify,amplitude,amputation,anabaptist,anabolic,anabolism,anachronism,anadromous,anaerobic,anagenesis,anaglyph,anagram,anagrammatic,analgesic,analogy,analysis,analytic,anamorphic,anamorphosis,anaphylaxis,anarchy,anatomy,andante,androgen,android,anemograph,anemometer,anemone,anemophilous,angiosperm,anhydrous,anima mundi,animal,animation,anion,anisogamy,annihilation,anniversary,annotation,annual,anode,anomalous,anomaly,anonymous,anorexia,antagonist,antagonize,Antarctic,antebellum,antediluvian,anther,anthology,anthracite,anthrax,anthropology,anthropomorphic,anthropomorphism,antibiotic,anticipate,antigen,antipathy,antipode,antipodes,antiquarian,antiquated,antique,antiquity,antirrhinum,antistatic,antithesis,antithetical,antitoxin,antonym,apart,apathy,aperient,aperture,aphelion,aphorism,apocalypse,apocrine,apocryphal,apogee,apology,apostasy,apostate,apostle,apostrophe,apparatus,appease,append,appendectomy,appetite,applaud,applause,appliance,application,apply,apposite,apprehend,approbation,appropriate,approve,approximate,apropos,apéritif,aquamarine,aquarium,aqueduct,aquifer,arable,arachnophobia,arbiter,arbitrage,arbitrary,arbitration,arcane,arcanum,archaeology,archaic,archaism,archangel,archetype,architect,archon,Arctic Ocean,arctic,ardent,ardor,arduous,aretaic,arete,argent,Argentina,Argonaut,arid,aristocracy,aristocrat,arrhythmia,arrogant,arrogate,arson,arthralgia,arthritic,arthritis,arthropod,arthroscopic,artifact,artifice,artillery,artisan,artist,ascend,ascertain,ascomycete,asinine,aspect,asperity,asperse,aspersion,aspire,ass,assent,assert,asset,assiduous,assimilate,assist,associate,assuage,assume,assumption,aster,asterisk,asteroid,astigmatic,astringent,astrology,astronaut,astronomy,atheism,athlete,athletic,atom,atopy,attain,attend,attenuate,attest,attract,attribute,attrition,atypical,auction,audacious,audacity,audible,audio,audiology,audition,auditorium,auditory,augend,augment,augmentation,augur,augury,august,aureate,aureole,auricle,auscultate,auscultation,auspice,auspicious,autarchy,authentic,author,autism,autocracy,autodidact,autogamy,autogenesis,autogenous,autograft,autograph,automatic,autonomous,autonomy,auxiliary,avail,avarice,avaricious,ave,avenue,aver,aversion,avert,avian,aviary,aviation,avid,avidity,avocation,axiology,axiom,axiomatic,axis,axon,axonometric,bacteria,bacteriophage,baculum,ball,ballista,ballistic,baptism,baptize,barograph,barometer,barycentre,barycentric,baryon,baryton,barytone,base,basic,basidiomycete,basis,batholith,bathymetry,bathyscaphe,bathysphere,beatification,because,beef,beer,bellicose,belligerent,benediction,benefactor,benefice,beneficence,benefit,benevolent,benign,benignant,benignity,beverage,bib,bible,bibliography,bibliophile,Bibliotheca,bicameral,bicuspid,bicycle,biennial,bifocal,bifurcation,bigamy,bilabial,bilateral,bilingual,billet-doux,binary,binoculars,biodiversity,biogenesis,biogeography,biography,biohazard,biology,biome,biometric,bionomics,biosphere,bipartite,bireme,biscotti,boor,borealis,botanic,botanist,botany,bovine,brachial artery,brachiosaurus,brachistochrone,brachycephaly,bradycardia,brevity,brief,bromate,brome,bromide,bromine,Bromus,bronchiole,bronchitis,bronchopneumonia,bronchus,Brontosaurus,buccal,bulbous,bureaucracy,bursa,bursar,bursary,cab,cachexia,cacography,cacophony,cadaver,cadence,caesura,calcite,calcium,calculate,calculus,caldron,calendar,calisthenics,calligraphy,callipygian,calm,caloric,calorie,calorimeter,calumnious,calumny,calyx,camera,camp,campaign,campus,candela,candid,candle,candor,cane,canine,canister,canon,canonic,cantata,canto,cantor,capable,capacious,caper,capital,capitulate,capitulation,caprice,Capricorn,caprine,capsule,captain,caption,captivate,captive,capture,carbon,carbuncle,carcinogenic,carcinoma,cardiac,cardinal,cardiograph,cardioid,cardiology,cardiomyopathy,carnage,carnal,carnival,carnivore,carnivorous,carpal tunnel syndrome,carpal,carpology,cascade,case,caste,castigate,castrate,catabolic,catabolism,catacomb,catadromous,catalyst,catarrhine,catastrophe,catatonia,catenary,catharsis,cathode,cation,caudal,causal,causative,cause,caustic,cauterize,cave,cavil,cavity,cavort,cede,ceiling,celerity,cenobite,cenotaph,Cenozoic,censure,census,cent,centenarian,centenary,centennial,center,centesimal,centipede,central,centrifugal,centrifuge,centripetal,centurion,cephalic,cephalopod,ceramic,certain,cervical,cervix,chalicothere,chalk,challenge,champion,chant,charnel,chaste,chastity,chiral,chiropractic,chlorine,chlorophyll,chloroplast,chordata,choreography,chorus,chromatic,chrome,chromium,chromosome,chronic,chronicle,chronology,chronometer,chrysalis,chrysolite,cilia,cinema,circle,circular,circulate,circumcise,circumference,circumflex,circumlocution,circumnavigate,circumscribe,circumstance,circumvent,circus,cirrhosis,cirrus,citation,cite,civic,civil,civilian,civility,civilization,clade,claim,clamor,clandestine,clarity,clause,claustrophobia,clavichord,clavicle,clear,cleistogamy,clemency,clinic,coagulate,cochlea,coda,coelom,coeval,cogent,cogitate,cogitation,cognition,cognitive,cognizance,cognizant,cognoscenti,cohere,coherent,cohesive,colander,collaboration,collar,collect,colliculus,collide,colloquial,colloquy,collude,colluvium,colony,coloration,coloratura,comity,command,commemorate,commend,commendation,commensurable,commensurate,comment,commerce,commercial,commit,commotion,compact,compare,compartment,compel,compete,competition,complacent,complaisant,complement,complete,component,comportment,comprehend,comprehensive,compress,compulsory,compute,concatenation,conceal,concede,concentrate,concentric,conception,concern,concert,conciliate,conciliatory,conclave,conclude,concord,concrete,concur,concurrent,condemn,condense,condiment,condition,condolence,condone,conduce,confection,confederacy,confederation,confer,confess,confidante,confidence,confident,confine,confirmation,conflict,confluence,conform,confound,confront,congenial,congest,congratulate,congregation,conic,conical,conifer,conjugal,conjunction,connect,connoisseur,connotation,connote,connubial,conoid,consanguinity,conscience,conscientious,conscious,consecrate,consecutive,consensus,consent,consequence,conserve,consist,consolation,console,conspicuous,conspire,constant,constellation,consternation,constitute,constrain,constrict,constringe,construct,construction,construe,consume,consummate,consummation,consumption,contact,contagious,contain,contemporaneous,contemporary,contend,content,contention,contentious,contents,contest,context,contiguous,continence,continent,contingency,contingent,continue,contort,contraband,contraception,contract,contradict,contraindicate,contrast,contravene,contribute,contrite,contrive,controversy,controvert,contumacious,contumely,convene,convenient,convention,conversant,conversation,converse,convert,convict,convince,convivial,convocation,convolution,convulsion,cooperate,copious,coprolite,coprophagia,coprophilia,copula,copulation,copy,coracoid,cord,cordial,core,cornea,cornucopia,corona,coronation,corporal,corporation,corporeal,corpse,corpulent,corpuscle,correct,corridor,corroborate,corroboration,corrode,corrugation,corruptible,cortical,cosmetics,cosmetology,cosmic,cosmonaut,cosmopolitan,cosmos,costal,cotyledon,coulee,council,countenance,counterfeit,countermand,couple,courage,courier,course,couture,cover,covert,coverture,cranium,crassitude,creation,creature,credence,credentials,credibility,credible,credit,creditor,credo,credulity,credulous,creed,creole,crepe,crescendo,crescent,crew,cribrate,cricoid,crisis,criterion,critic,critical,crucial,crucifix,crucify,crural,cry,cryptic,cryptogam,cryptography,ctenophore,cubic,cuboid,culinary,culpable,culprit,cult,cultivate,cultivation,culture,cuneiform,curative,curator,curb,cure,curious,currency,current,cursive,cursor,cursory,curvature,curve,cutaneous,cuticle,cyanide,cycle,cyclic,cyclone,cyclops,cylinder,cynosure,cystic,cytolysis,cytoplasm,dame,Damian,damnation,danger,daunt,debase,debit,debt,decade,decagram,decahedron,Decalogue,Decameron,decameter,decapitate,decathlon,decay,decimal,decimate,declaration,declare,declination,decline,decompose,decor,decorate,decorous,decorum,decrease,decree,decry,dedicate,deduce,deem,defalcation,default,defeat,defect,defend,defenestration,defer,defile,define,deflect,defoliant,deform,defray,dehydrate,deject,delegate,delete,deletion,delineate,deliquesce,deliver,deliverance,deltoid,delude,deluge,demagogue,demand,demarcate,demeanor,dement,demented,dementia,democracy,demography,demonstrate,demur,denarius,dendrite,dendrochronology,denier,denigrate,denotation,denote,denouement,dense,density,dental,dentifrice,dentures,denude,depart,depiction,depilatory,deplete,depollute,deport,depose,deposit,depravity,deprecation,depredate,depress,deprivation,deride,derision,dermatology,dermis,derogate,derogation,derogatory,descend,describe,descry,desecrate,desert,deserve,desiccate,desiccation,design,designate,desist,desolate,desperation,despot,destination,destroy,destruct,desultory,detain,detention,detergent,determine,detest,detract,detritus,deuce,deuteragonist,Deuteronomy,deviate,devil,devolve,devour,dexterity,dextrose,diabolic,diacritic,diagnosis,diagram,diagrammatic,dialogue doxology,dialysis,diameter,diaphanous,diaphragm,diatribe,dichotomy,dicot,dictate,dictation,dictator,diction,dictionary,dictum,didactic,differ,diffident,diffract,diffusion,digest,digital,digraph,dilapidate,diligence,diluent,dilute,dilution,dilutive,diluvial,diluvian,diluvium,dimension,dimorphic,dinar,dinero,dinheiro,dinosaur,diode,diploid,diploma,dipole,direct,dirigible,disaffect,disapprobation,disburse,discern,discord,discordant,discourse,discover,discredit,disgust,disparage,disparate,dispel,disperse,displease,dispute,disrupt,dissemble,dissent,dissertation,dissimilate,dissolute,dissolve,dissonance,distant,distich,distillation,distinction,distinguish,distort,disturb,diversify,divert,divest,divulge,docile,doctor,doctrine,document,dodecahedron,dogma,dogmatic,dogmatism,dol,dolce,doleful,dolorous,domain,dome,domestic,domicile,dominant,dominate,domination,domineer,dominion,domino,donate,donation,donor,doom,dormant,dormitory,dorsal,dorsum,dossier,double,doubt,dough,doxology,dual,duality,dubiety,dubious,dulcet,dulcian,dulcimer,dungeon,duo,duplex,duplication,duplicity,durable,duration,duress,dyad,dyadic,dynamic,dynamism,dynamite,dynamo,dynasty,dysanagnosia,dysentery,dysgenic,dysmorphic,dyspepsia,dysplasia,dysthymia,dystrophy,easel,ebullient,eccentric,Ecclesiastes,ecclesiastical,ecology,economics,economy,ecstasy,ecstatic,ectoderm,ecumenism,edible,edict,edifice,effect,effective,effectual,effigy,effluent,effusion,effusive,egocentric,egregious,egress,eirenic,ejaculate,eject,elaboration,elapse,election,electric,electricity,electrocardiogram,electron,electronic,eleemosynary,elevate,elevator,elocution,elongate,eloquence,eloquent,elucidate,elude,elusive,elusory,elute,elution,eluvial,emaciate,emanate,emancipate,emasculate,embolectomy,emerge,emesis,emetic,emigrant,eminent,emit,emollient,emotion,empathy,emphasis,empire,emulator,emulsion,encephalogram,encephalopathy,enchant,enclitic,encourage,endemic,endoblast,endocardial,endocardium,endocrine,endocytosis,endoderm,endogamy,endogen,endomorph,endorse,endoskeleton,endosperm,endotherm,endure,enemy,energy,enervate,engender,engram,enjoin,enlargement,enmity,ennead,ensemble,ensiform,ensue,enterprise,entertain,enthusiasm,enumerate,envious,envy,Eocene,eon,ephemeral,epicardium,epicenter,epidemic,epidermis,epiglottis,epigone,epigram,epigrammatic,epigraphic,epigraphy,epigynous,epilator,epilepsy,epilogue,epiphany,epistemic,epistle,epitaph,epithelium,epithet,epoch,epsilon,equal,equanimity,equate,Equator,equestrian,equilibrium,equinox,equipoise,equity,equivalence,equivalent,equivocal,equivocate,eradicate,erasure,erect,erection,erg,ergo,ergometer,ergonomics,ergophobia,erogenous,erosion,erotic,err,errant,erroneous,error,erudite,erudition,erupt,eruption,erythrocyte,esoteric,esperance,estrange,et cetera,eternal,ether,ethereal,etheric,ethmoid,ethnic,ethology,etymology,eucalyptus,eugenics,eulogy,euphony,euphoria,Europe,eurypterid,euthanasia,evacuate,evade,evaluate,evanescent,evaporate,evaporation,event,evict,evidence,evident,evince,eviscerate,evoke,evolve,exacerbate,exarch,exasperate,excavation,except,excise,excite,exclamation,exclude,exclusive,excogitate,excoriate,excrement,excruciating,exculpate,excursion,excuse,exemption,exert,exhaustion,exhumation,exhume,exist,exit,exogamy,exonerate,exoskeleton,exothermic,expand,expansion,expect,expel,expiate,expire,explanation,explicate,explicit,explosion,exponent,export,expose,expound,expulsion,expunge,expurgate,extant,extemporaneous,extend,extension,extent,extenuate,exterior,extort,extortion,extra,extraordinary,extreme,extremity,extremophile,extrovert,extrude,extrusion,exuberant,exude,faba bean,fable,face,facile,facsimile,fact,faction,factitious,factor,factory,fail,faith,fake,falcate,falchion,falciform,falcon,fallacious,fallacy,fallible,false,falsetto,falsify,falsity,fame,familiarity,family,fantasy,fasciculation,fascinate,fascism,fashion,fate,fatuous,fault,fealty,feasible,feat,feature,feckless,federal,federate,federation,feign,felicity,feline,fellation,femininity,femoral,femur,fend,ferment,ferocity,ferret,ferrous,ferry,fertile,fervent,fervid,fervor,fetid,fiat,fibroblast,fiction,fictitious,fiduciary,fig,filament,file,filigree,fillet,final,finale,finance,fine,finish,finite,firmament,fission,fissure,fistula,fix,fixation,fixture,flaccid,flare,flatulence,flavonoid,flavor,flex,flexible,flexile,flexion,flexor,floral,florid,fluctuate,fluctuation,fluency,fluent,fluid,fluidity,flush,flute,fluvial,flux,focal,focus,font,fontal,fontanelle,foramen,foraminifer,forceps,forfeit,form,formal,formaldehyde,formation,formic acid,formula,formulate,fornication,fort,forte,fortify,fortitude,fortress,fossil,found,foundation,founder,fovea,fractal,fraction,fractious,fracture,fragile,fragment,frangible,fraternity,fray,frenetic,friction,frigid,frontage,frontal,fructose,fugacious,fugitive,fulminant,fulminate,fulmination,fume,fumigation,function,fund,fundament,fundamental,fundamentalism,fungibility,furtive,fuscous,fusion,galactic,gam,gambit,gambol,gamete,gametic,gametogenesis,gametophyte,gammon,gargantuan,gargle,gargoyle,garrulous,gastric,gastritis,gastroenterologist,gastroenterology,gastronomic,gastronomy,gastropod,geitonogamy,gelatin,gelid,gender,gene,genealogy,generate,generation,genesis,genetic,genial,genital,genitive,genius,genocide,genteel,gentle,genuine,genus,geocentric,geocentrism,geode,geodesy,geodetic,geography,geoid,geology,geomancy,geometry,geriatric,geriatrics,germ,German,germane,germicide,germination,gerontocracy,gerontology,gerundive,gestation,glabrous,glacier,gladiator,glial,global,globe,globule,glorify,gloss,glossary,glottis,glue,gluten,glycogen,glycoprotein,glyph,gnathic,gnomic,gnomon,gnosis,Gnostic,gnosticism,gonad,goniometer,gonion,grace,grade,gradual,graduate,graft,grammar,granary,grandiloquent,grandiosity,granite,granola,granule,graph,grapheme,graphemics,graphic,graphite,graphology,grateful,gratify,gratitude,gratuity,gratulate,grave,gravitate,gravity,gregarious,gubernatorial,gusto,gutta,guttural,gymnasium,gymnast,gymnastics,gymnosophist,gymnosperm,gynecology,habit,hadron,halite,halitosis,halogen,haploid,hedonism,heir,heiress,helicopter,heliocentric,heliograph,heliotrope,heliotropism,helium,hemicycle,hemisphere,hemoglobin,hemophilia,hemorrhage,hemostat,hendecagon,heptagon,heptathlon,herald,heraldic,heraldry,herbal,herbicide,herbivore,herbivorous,hereditary,heredity,heresy,heretic,heretical,heritage,herpes,herpetology,hesitate,heterochromatin,heterodox,heterodoxy,heterodyne,heterogametic,heterogamous,heterogamy,heterogeneity,heterogeneous,heterosexual,heuristic,hexagon,hexahedron,hexameter,hibernation,hiemal,hierarchy,hieroglyphics,hippodrome,hippopotamus,hirsute,histrionic,hodometer,holistic,holocaust,hologram,holography,holomorphic,homeostasis,homicide,hominid,homogametic,homogeneous,homograph,homophobia,homophone,homosexual,homozygous,honorable,honorarium,horizon,hormone,horoscope,horticulture,hospice,hospital,hospitality,hostile,human,humane,humanity,humus,hyaline,hyaloid,hydrant,hydrate,hydraulics,hydrogen,hydrology,hydrolysis,hydrophile,hydrophily,hydrophobia,hydroponic,hydrous,hygrometer,hymen,Hymenoptera,hyoid,hyperbaric,hyperbole,hyperthermia,hypertonic,hyphen,hypnosis,hypnotherapy,hypnotize,hypocrisy,hypodermic,hypogeum,hypothalamus,hypothermia,hypothesis,hypotonic,hysteresis,iatrogenic,ichthyology,iconoclast,icosahedron,ideogram,ideologue,ideology,idiom,idiopathic,idiosyncrasy,idiosyncratic,idiot,idol,idolatry,idyll,igneous,ignite,ignition,ignominious,ignominy,ignorant,illicit,illiterate,illude,illuminate,illumination,illusion,illuviation,illuvium,image,imagine,imbibe,immanence,immanent,immense,immersion,immigrant,imminent,immortal,immurement,immutable,impact,impaction,impalement,impartial,impeccable,impede,impel,imperative,imperious,impetus,impinge,impious,implacable,implement,implicate,implicit,implode,implore,imply,import,impose,impossible,impotent,impound,imprecation,impudent,impugn,impulse,impune,impunity,impurity,impute,inane,inanition,inanity,inauguration,incandescent,incarceration,incarnadine,incarnate,incendiary,incense,incest,incineration,incipient,incisor,incite,inclement,inclination,incline,include,incognito,incommensurable,incommensurate,incorporate,increase,incredible,incredulous,incubation,incur,indelible,indemnify,indictment,indigenous,indoctrinate,indoctrination,indolence,indomitable,induce,inert,inertia,inexorable,infant,infatuation,infect,infer,infidel,infinite,inflation,inflect,inflection,inflict,influence,influx,inform,infraction,infrastructure,infringe,infusion,ingenious,ingenuous,ingrate,ingratiate,inhale,inherent,inherit,inhospitable,inhume,inimical,inion,iniquity,inject,injunction,innate,innervate,innocent,innocuous,innovate,innovation,innuendo,innumerable,inoperable,Inquisition,insane,inscribe,insemination,insert,insidious,insignia,insinuate,insipid,insist,insolence,insolent,insomnia,inspect,inspire,instant,instill,institution,instruct,insufflation,insular,insulation,insuperable,insurgent,insurrection,intact,integument,intelligence,intend,inter,intercalate,intercept,intercollegiate,interdiction,interject,interlocution,intermission,intermittent,interrogation,interrupt,intersection,intersperse,intervene,intervention,intimate,intimation,intoxicate,intramural,intransigent,intravenous,intrepid,introduce,introspective,introvert,intrude,invective,inveigh,invent,inverse,invert,invest,investigate,investiture,inveterate,invidious,invigilate,invincible,invite,invocation,invoke,involve,irascible,irate,ire,iridescent,irrational,ischiadic,ischium,isobaric,isogloss,isomer,isometric,isomorphic,isosceles,isotonic,isotope,isotrope,isotropic,iteration,itinerary,janitor,January,jargon,jealousy,jocose,jocular,jocularity,jocund,jocundity,join,joke,judicial,judiciary,junction,juncture,junior,juniority,junta,jurisprudence,jury,just,justice,juvenile,juxtaposition,kaleidoscope,keratin,kilobyte,kilogram,kilometer,kinesthetic,kinetic,kleptomania,kudos,labial,laceration,lacrimal,lactate,lactation,lactose,laissez-faire,laminate,lamination,lamp,lapidary,large,largesse,largo,larva,larvae,larval,latitude,laud,laudable,laudanum,laudation,launder,laundry,lava,lavation,lavatory,lave,lavender,lavish,laxative,league,leaven,lecithin,lectern,lecture,legacy,legal,legato,legend,legible,legion,legislate,legislation,legislative,legislator,legislature,legitimate,legitimize,leniency,Leo,leonine,Leopold,Lepidoptera,lesion,lesson,leucocyte,lever,leverage,levitation,levity,levy,libel,liberal,liberalize,liberate,liberation,libertine,liberty,librarian,library,ligament,ligature,limpid,line,linearity,linguistic,liniment,lipogram,lipolysis,liquefy,liqueur,liquid,liquor,litany,literacy,literal,literary,literature,lithic,lithosphere,liturgy,local,locality,locate,location,locomotion,locus,logarithm,logic,logogram,longevity,longitude,loquacious,loquacity,lotion,lucid,Lucifer,lucubrate,ludicrous,luminary,luminous,luna,lunar,lunatic,macrobiotic,macroeconomics,macron,macrophage,magnanimous,magnate,magnificent,magnify,magniloquent,magnitude,magnum,maintain,majesty,majority,majuscule,malediction,malefaction,malevolent,malfeasance,malfunction,malicious,malignancy,malnourished,malnutrition,malodorous,mammal,mammary gland,manacle,manage,mandate,mandatory,maneuver,mania,maniac,manicure,manifest,manse,mansion,manual,manufacture,manuscript,map,marine,maritime,market,masculine,maternal,maternity,matrimony,matrix,matron,maximum,meager,measure,mechanics,media,median,mediate,medieval,mediocre,Mediterranean,medium,megacycle,megalith,megalomania,megalopolis,megaphone,meiosis,meiotic,Melanesia,melanism,melanoma,melatonin,meliorism,mellifluous,memento,memoir,memorable,memorial,memorize,memory,menace,mendacious,mendacity,meningitis,meninx,menopause,menorrhea,menstrual,menstruation,mental,mentality,mention,mercantile,mercenary,merchant,mercy,mesoderm,mesogastric,Mesolithic,Mesopotamia,mesozoic,metabolism,metallurgy,metamorphic,metamorphosis,metaphase,metaphor,metaphysics,metastatic,meteor,meteorology,meter,method,metric,metrology,metronome,metropolis,micelle,microcosm,microeconomics,micrometer,microphone,microscope,microscopic,migrant,migrate,migration,military,militia,millenary,millennium,million,mime,mimeograph,mimesis,mimetic,mimic,minority,Minotaur,minuscule,minutiae,miracle,mirror,misandry,misanthrope,misanthropy,miscellaneous,miscreant,miser,miserable,miserly,misery,misogamy,misogynist,misogyny,missile,mission,missionary,mitigate,mitochondrion,mitosis,mixture,mnemonic,mobile,mode,model,moderate,moderation,moderato,moderator,modern,modest,modicum,modification,modify,molar,mollify,momentum,monadic,monarchy,monaster,monastery,monastic,monatomic,monism,monitor,monk,monochrome,monogamy,monoglot,monogram,monograph,monogyny,monolith,monologue,monomer,monometer,monopoly,monopsony,monotheism,monotone,monotreme,monotriglyph,monster,Montana,monument,moral,moratorium,mordacious,moron,moronic,morose,morpheme,morphological,morphology,morsel,mortal,mortality,mortician,mortuary,motile,motion,motive,motor,mouse,move,movement,multifold,multilingual,multiple,multiplex,multiply,multitude,mundane,mural,muster,mutation,mutiny,mycology,Mycoplasma,myocardium,myopia,myopic,myosis,myriad,myriapod,Myrmidons,mystery,mythic,mythology,mythomania,mythos,Myxogastria,narcolepsy,narcosis,narcotic,naris,narrative,nasal,nascent,natal,native,nautical,naval,navigate,nebula,nebulosity,nebulous,necrophobia,nefarious,negative,neglect,nematode,Neolithic,neologism,neonate,neophyte,nephritis,nerve,nervous,neural,neuralgia,neuritis,neurologist,neurology,neuron,neuropathic,neurosurgeon,neurotic,nexus,nictation,nihilism,noble,nociceptive,noctambulist,nocturnal,nocuous,node,nodule,nomadic,nomenclature,nominate,nomination,non sequitur,none,notable,notary,notate,notation,note,notochord,nova,novel,November,novice,noxious,nuance,nubile,nuchal cord,nuclear,nucleus,nudibranch,nudist,nudity,nuisance,nullify,numeral,numeration,numismatic,nutrient ,obduracy,obdurate,obduration,obesity,obfuscate,obfuscation,objurgate,oblique,obliquity,obliterate,obloquy,obnoxious,obnubilate,obsequious,observe,obsession,obsolescence,obsolescent,obsolete,obstacle,obstinate,obstreperous,obstruct,obviate,obvious,occlusion,occult,occur,octagon,octahedron,octangular,octennial,octonary,ocular,oculus,odious,odometer,odontoid,odontology,odorous,oenology,oesophagus,offend,offense,offer,office,officer,official,officiate,officious,olfaction,oligarchy,Oligocene,oligopoly,oligosaccharide,olivaceous,olivary,olivette,ominous,omit,ommatidium,omnipotence,omnipresent,omniscient,omnivore,omnivorous,onerous,onomatopoeia,ontogeny,ontology,oocyte,oogamy,oogenesis,opacity,opera,operate,operculum,ophthalmology,opponent,oppose,opprobrium,opsimath,optical,optimum,optional,opus,oracle,oral,orate,oration,orator,oratory,orbit,orchid,ordinal,ordinary,organ,organism,orient,orifice,orison,ornament,ornate,ornithology,orthodontist,orthodox,orthodoxy,orthography,orthopedic,orthosis,oscillation,ossification,ostensible,ostentatious,osteoblast,osteoclast,osteoporosis,ostiole,ostracism,ostracoderm,otology,oval,ovary,overt,overture,ovine,ovule,oxygen,oxymoron ,oxymoron,oxymoronic,Pacific Ocean,pacifism,pacifist,pacify,pact,page,pagination,pain,pale,palearctic,Paleo Diet,Paleolithic era,Paleolithic,paleomagnetism,paleontology,Paleozoic,palindrome,pall,palliate,palliative,pallid,pallium,pallor,palmate,palp,palpable,palpate,palpation,palpitant,palpitation,panacea,pandemic,pandemonium,Pangea,pangrammatic,panoply,panoptic,Panthalassa,pantomime,par,parable,paradox,paragenesis,parageusia,paragraph,parallax,parallel,parameter,parcel,parcity,pardon,pare,parietal,parity,parody,parsimony,part,parthenogenesis,Parthenon,partial,participate,particle,partisan,partition,parvovirus,passerine,passion,pastor,pasture,paten,patent,paternity,pathetic,pathogen,pathology,patience,patriarch,patriarchy,patrilocal,patriot,patron,patronage,patronize,paucity,pave,pavement,peccadillo,peccant,peccavi,pectic,pectin,pectoral,peculiar,pecuniary,pedagogue,pedagogy,pedal,pedant,pedantic,pedestrian,pediatric,pedicure,pedophilia,peer,pejorative,pellucid,penal,penalize,penalty,penance,penchant,pendant,pending,pendulum,peninsula,penitence,penitent,penitentiary,pennate,pensive,pentagon,pentagram,pentamer,pentameter,pentathlon,pentecostalism,pentode,penultimate,penumbra,peptic,peptide,peptone,percent,percolate,peregrine,perennial,perfect,perfection,perfervid,perfidious,perfidy,perforation,perform,perfusion,pericardium,perigee,perihelion,perimeter,periodontal,peripheral,periscope,perjury,permanence,permanent,permeate,permit,pernicious,perplex,persist,persistence,perspire,persuasion,pert,pertain,pertinacious,pertinacity,pertinent,perturb,pertussis,peruse,pervade,pervasive,perverse,pervert,pessimal,petition,petroglyph,petulant,phagocyte,phalanges,phalarope,phantasm,phantom,pharmacy,phase,phenology,phenomenon,phenotype,pheromone,philanthropy,philharmonic,philology,philosophy,phlegm,phlegmatic,phloem,phonetic,phonograph,phosphor,phosphorus,photo,photoelectric,photogenic,photograph,photographic,photosynthesis,phyllotaxis,phylum,physalis,physics,physiognomy,phytoplankton,picture,piety,pigment,pile,pill,pillar,pillory,pine,pineal gland,pinnacle,pinnate,pinnule,pinocytosis,pious,Pisces,piscivore,pity,placable,placate,placebo,placid,plagioclase,plaice,planar,plane,plangent,planogamete,plasma,plasmogamy,plastic,plateau,platitude,platypus,plaudits,plausible,plea,please,pleasure,plebeian,plebs,plenary,plenitude,plenty,plesiosaur,plethora,pleuritis,plumage,plumber,plural,pluralist,plus,plutocracy,pluvial,ply,pneumatic,podiatry,poet,poignant,point,polar,polemic,police,policy,politics,pollination,pollution,polyandrous,polyandry,polyarchy,polychrome,polydactyly,polygamist,polygamy,polyglot,polygon,polymer,polymorphic,Polynesia,polynomial,polysaccharide,polytheism,polytheistic,ponder,pontoon,popular,population,populous,porcine,pore,pork,pornography,porosity,porphyrin,port,portable,portage,portal,portend,portent,portentous,porter,portfolio,position,positive,possess,posterior,posterity,postpone,postscript,posture,potable,potent,potentate,potential,potion,power,pray,prayer,preamble,precarious,precede,precipitation,predation,predator,predatory,predict,prediction,predominant,preempt,preface,prefer,prefix,prehensility,prehension,prelude,premonition,prenuptial,prepare,prepense,preponderance,prerogative,Presbyterianism,prescient,prescribe,preserve,preside,president,pressure,presto,presumption,pretense,preterite,pretermission,pretext,prevail,prevaricate,prevent,previous,prey,primacy,primal,primary,prime,primeval,primitive,primogenitor,priority,prison,privilege,prize,probable,probation,probe,probity,problem,procedure,proceed,procession,proclamation,procrastinate,procreation,proctology,prodigal,prodigality,prodigious,prodigy,produce,profess,proficient,profile,profligacy,profligate,profound,profundity,profuse,profusion,progeny,prognosis,program,programmatic,progress,prohibition,project,prolific,prolix,prologue,promenade,prominent,promote,pronunciation,proof,propagate,propel,propellent,proper,property,propitiate,propone,proponent,proposition,propound,proprietary,proprietor,propriety,propulsion,propulsive,propulsor,prorogue,prosecute,prosenchyma,prospect,prostate,prosthesis,prostrate,protagonist,protection,Proterozoic,protest,protocol,protoplasm,prototype,protozoa,protozoan,prove,provide,providence,provident,province,provocative,provoke,proximity,prune,pseudonym,psilocybin,psyche,psychiatrist,psychiatry,psychology,psychosis,psychotropic,psychrometer,pterodactyl,ptosis,ptyalin,pubescent,pubic,publication,publicity,pudendum,pugilism,pugnacious,pulchritude,pulmonary,pulsate,pulse,pulverize,punch,punctual,punctuation,puncture,pungent,punish,punitive,pupa,pupate,puppet,pure,puree,purgatory,purge,purify,purity,purport,pursue,push,putative,pygostyle,pylon,pyrolysis ,pyromania,quadragenarian,quadrangle,quadrilateral,quadrillion,quadruped,quadruple,quarter,quartile,quasar,quaternary,quaternion,query,quiescent,quiet,quietus,quinary,quintile,quondam,quota,quotient ,radiance,radiation,radical,ramification,ramose,Rana,rancid,rancor,rapacity,rape,rapeseed,rapport,raptor,rarefy,rarity,raucous,rebellion,recalcitrant,recant,recap,recapitulate,recede,recidivism,recipient,reclamation,recline,recluse,recognize,recommend,record,recreant,recreation,recruit,rectangle,rectify,rectitude,rectum,recur,recursion,recursive,redact,redeem,reduce,redundancy,refectory,refer,refine,reflect,reflection,reflex,reform,refract,refractory,refrain,refuge,refund,regal,regent,regicide,regime,regimen,regiment,region,register,regress,regular,regulate,regulation,reincarnation,reject,rejuvenate,relapse,relaxation,relegate,relict,relieve,religion,relinquish,remand,remanence,remanent,reminisce,reminiscence,remit,remonstrate,remora,remorse,remove,renaissance,renal,renegade,renege,renovate,repair,repast,repeat,repel,repellent,repent,repetition,replenish,replete,replicate,report,repose,reprehend,reprobate,reprove,reptile,repudiate,repugnant,repulsive,reputation,requiem,rescind,resemble,resent,reserve,reside,resident,resilient,resist,resolute,resolve,resonance,respect,respiration,respond,restrict,resurgent,retard,retention,reticence,reticent,reticle,retina,retort,retract,retribution,retrieve,retrograde,retrospective,retrovirus,reveille,revelation,revenue,reverberation,reverse,revert,revile,revise,revive,revoke,revolve,rex,rheostat,rhinoceros,rhinoplasty,rhizome,rhododendron,rhombus,ridicule,ridiculous,risible,robust,rodent,rogation,rogue,rostral,rostrum,rotation,rotunda,royal,rubric,ruby,rude,rudimentary,rule,rumination,rupture,rural,saccharin,sacrament,sacred,sacrifice,sacrilege,sacrosanct,sagacious,sagacity,sagittal plane,Sagittaria,saint,salicin,salient,salinity,salubrious,salubrity,salutary,salute,salvage,salvation,salve,sanctify,sanction,sanctuary,sanguinary,sanguine,sanity,sapient,saponification,sarcophagus,sartorial,sate,satiate,satiety,satisfy,sative,saturate,scabies,scalar,scale,scalene muscles,scalene triangle,scaphoid bone,scent,schematic,schism,schismatic,schizophrenia,sciatic,sciatica,science,scientific,scissors,scleroderma,sclerosis,sclerotic,scoliosis,scope,scribble,scribe,script,scripture,scruple,scrupulous,sculpture,scute,Scyphozoa,season,seasonable,seasonal,sebaceous,sebum,sec,secant,secede,secern,seclude,second,secret,section,secure,sedative,sediment,sedition,seditious,seduce,sedulity,sedulous,segment,segregation,seismograph,select,Selene,selenium,semantics,semaphore,semblance,semen,semester,semifinal,senator,senescent,senile,senility,senior,sensation,sense,sensible,sensitive,sensory,sentence,sentience,sentient,sentiment,separate,septenary,septennial,septime,Septuagint,sequel,sequence,serein,serial,serialize,series,serotine,serous,serpent,serration,servant,service,servile,servitude,sesquicentennial,session,seta,sever,severity,sextant,sibilance,siccative,sidereal,sideroblast,signal,signature,significant,silence,silviculture,simian,similar,similarity,simile,similitude,simulacrum,simular,simulate,simulation,simulator,simultaneous,sinecure,singular,sinistral,sinusoidal,siphon,social,solace,solar,sole,solenoid,solicit,solicitous,soliloquy,solipsism,solitaire,solitary,solitude,solo,solstice,soluble,solute,solution,solve,solvent,somatic,somnambulist,somnolent,sophism,sophist,sophisticate,sophomore,sophomoric,sopor,soporific,soprano,sordid,sorority,souvenir,sovereign,sparse,spatial,species,specific,specimen,specious,spectacle,spectator,speculate,speculation,spermatogenesis,sphenoid,sphere,spheroid,sphincter,spicule,spine,spirit,spondylosis,spongocoel,sputum,squalid,squalor,squamous,stable,stagnant,stalactite,stalagmite,stamen,stamina,stance,stanchion,stannous,stanza,stasis,state,static,station,stationary,statistic,statue,status,statute,staunch,stay,stearic acid,steganography,Stegosaurus,stellar,stenography,stenosis,stereometry,sternum,stethoscope,stigma,stimulate,stochastic,stole,strain,strange,strategy,stratify,stratosphere,stratum,stratus,street,Streptococcus,strict,strigose,stringent,structure,student,stupid,stupor,Stylites,suave,suavity,subjugate,submarine,submerge,submit,subpar,subpoena,subscribe,subsequent,subservient,subside,subsist,substance,substitute,subsume,subterfuge,subterranean,subtle,subtotal,subtract,subtrahend,suburbanite,subvert,succeed,success,succinct,succor,succuba,sucrose,suffer,suffice,suffix,suffusion,suggest,sui generis,suicide,sulcus,sum,summa cum laude,summary,summation,summit,summon,superable,superb,supercilious,supercomputer,superficial,superfluous,superheat,superimpose,superior,superlative,supermarket,supernal,supernatural,supernova,superposition,superpower,superscript,supersede,supersonic,superstition,supervene,supervise,supination,supine,supple,suppletion,supplicant,supplicate,supplication,supply,support,supranationalism,supreme,supremum,surfeit,surge,surgeon,surname,surplus,surprise,surreptitious,surrogate,surround,surveillance,survive,suspend,suspense,suture,sycophant,symbol,symmetric,symmetry,sympathy,symphony,synagogue,synapomorphy,synarchy,synchronize,synchronous,syndrome,synergy,synesthesia,syngraft,synonym,synthesis,syringe,system,tachometer,tachycardia,tacit,taciturn,tactile,talus bone,tangent,tangible,tapestry,tapetum,tapis,tardigrade,tardy,tarsal,Taurus,tautology,tautomerism,taxidermy,taxonomy,technocracy,technology,telecast,telegram,telegraph,telegraphy,telekinesis,telemetry,teleology,telepathy,telephone,telescope,television,tempo,temporal,temporary,tenacious,tenacity,tenant,tend,tendency,tendentious,tender,tenet,tenor,tensile,tension,tenuous,tepid,tepor,tergiversate,terminal,termination,terminology,ternary,terrace,terracotta,terrain,terrarium,terrestrial,territory,terse,tertian,tertiary,testament,testify,testimony,tetragram,tetragrammaton,tetrahedron,tetrameter,tetrode,text,textile,texture,thalassemia,thanatology,theca,thematic,theme,Themis,theocracy,theology,theophany,theorem,theory,thermal,thermometer,thermos,thermostat,theropod,thesis,thyratron,thyroid,thyrotropin,thyroxine,timid,timorous,tincture,tome,tone,tonsillectomy,topiary,topic,topography,topology,toponymy,tornado,torpid,torpor,torque,torsion,tortuous,torture,total,totality,tournament,toxic,toxicology,toxology,toxoplasmosis,trachea,tractable,traction,tractor,tradition,traduce,traffic,trajectory,transact,transcend,transcendent,transept,transfer,transfix,transfusion,transgress,transient,transitory,translucent,transmit,transport,transverse,transvestite,trapezius,trapezoid,trauma,traumatic,traumatize,travesty,tredecimal,trematode,tremor,trench,trenchant,trepidation,triad,triangle,triarchy,triathlon,tribe,tribology,tribulation,tribunal,tribune,tributary,tribute,triceratops,tricolor,trigon,trigonometry,trigraph,trilogy,trine,trinity,triode,triple,tripod,triptych,trireme,triskaidekaphobia,tritagonist,trite,triticale,triumvirate,trivia,trochlea,trope,trophic,tropic,tropism,troposphere,troubadour,trove,truculent,truncate,truncheon,trunk,tryptophan,tumid,tumor,tumult,tumultuous,turbid,turbine,turbulent,tympani,type,typewriter,typical,typify,typography,typology,ullage,ultimate,ultimatum,ultrasonic,umbilical,umbrage,umbrella,unanimous,unary,uncial,uncinate,undulate,ungulate,unicorn,unicycle,uniform,unify,union,universe,university,unorthodox,unscrupulous,untenable,urban,urbane,urbanism,urbanize,urgent,urology,ursine,Ursus,use,usual,utilitarian,utility,utilize,utopia,uvea,uxoricide ,vacancy,vacant,vacate,vacation,vaccary,vaccination,vaccine,vacillate,vacillation,vacuous,vacuum,vagabond,vague,vain,valediction,valence,valiant,valid,valor,value,valve,vanish,vanity,vanquish,vapid,vapor,vaporize,vaporous,variable,variance,variant,variate,variation,variety,various,vary,vasectomy,vault,vector,vehement,vehicle,velate,velleity,velocity,velour,velvet,vend,vendor,venerable,veneration,venereal,venison,venosity,ventilation,ventilator,ventral,venture,venue,venule,veracious,verbal,verbatim,verbosity,verdict,verify,verisimilar,verisimilitude,verity,vermiform,vermin,vernal,versatile,verse,version,versus,vertex,vertical,vertigo,very,vesical,vesperal,vest,vestigial,vestment,veteran,veto,via,viable,vicar,vicarious,vice versa,vice,vicegerent,vicissitude,victor,victory,victuals,video,vigesimal,vigil,vigilance,vigilant,vigilante,vile,vilify,villa,village,villain,vine,vinous,viridian,virility,visceral,viscosity,visible,vision,visit,vista,vital,vitality,vitamin,vitiate,vitreous,vitriol,vituperate,vivacious,vivacity,vivid,vivisection,vocal,vocation,vociferous,volatility,volition,voluble,volume,voluminous,voluntary,volunteer,voluptuary,voluptuous,vomit,voracious,votive,vulgarity,vulgate,vulnerable,vulpine,vulva,xenophobia,xeroderma,zeal,zealot,zealous,zodiac,zoic,zonal,zone,zoo,zoology,zoon",
	latin: "abduct,adieu,abject,abjure,ablution,abnegation,abrogate,abscond,absolve,abstemious,abstinence,abstraction,abstruse,accede,accessible,acclaim,acclamation,accommodate accordant,accredit,accretion,acerbic,acquiesce,acquisitive,acrid,acrimonious,actuate,acuity,acumen,adamant,adaptability,adduce,adept,adherence,adjudge,adjudicate,adjunct,adjure,admonish,adulate,adulterate,advent,adventitious,adversary,adverse,advocate,affable,affectation,affiliate,affinity,affirm,affront,agency,aggrieved,agrarian,agronomy,alacrity,alien,alienate,alleviate,alliteration,allude,altercation,altimeter,altruist,amatory,ambient,ambiguous,ambivalence,amble,ambulatory,ameliorate,amiable,amicable,amity,animadversion,animosity,annals,annuity,annul,Annunciation,antebellum,antecedent,antediluvian,antiquary,antiquated,antiquity,appellant,appellate,appellation,append,appertain,applicable,apposite,apposition,appreciable,approbation,appropriate,apt,aquamarine,aqueduct,aqueous,aquifer,arable,arbitrary,arbitrate,arboreal,arboretum,ardent arenacious argentine arid,armada,armistice,arrogate,articulate,artifice,ascendancy,ascertain,ascribe,asocial,aspirant,assess,assiduous,assignation,assimilate,astute,atrocity,audacious,audit,augment,augur,august,aureole,auriferous auspicious,austere,authoritarian,authorize,auxiliary,avail,avarice,aver,averse,avert,aviary,avuncular,balneology belabor,belligerent,benediction,benefactor,benefice,beneficiary,benevolent,benignity,biennial,bilingual,biped,blatant bona fide,bonanza,bonbon,boon,bounteous,bovine,brevity,cadence,caesura,cajole,calamitous callous calumny,candid,canine,capacious,caper,capital,capital,capitalism,capitulate,captious,carnivorous,cascade,castellated,castigate,casualty,casuistry,causal,cede,celerity,celestial,censorious,censure,centenarian,centennial,centrifugal,circumambient,circumambulate,circumfluent,circumlocution,circumnavigate,circumscribe,circumspect,circumvent,civic,civil rights,civility,clamor,claret,clarion,claustrophobia,clemency,clientele,cloister,closure,coefficient,coercion,cogent,cogitate,cognition,cognizant,collaborate,collocation,colloquial,colloquy,collusion,commandeer,commemorate,commendation,commiserate,commissary,commodious,commonality,commonweal,commune,communism,compel,compelling,complacent,compliance,comport,compulsive,compulsory,conciliatory,concise,concomitant,concord,concordance,concourse,concupiscence,concur,concurrent,condone,conducive,confabulate,confectionery confidante,conflagration confound,confront,congenital,conjecture,conjugal,conjunctive,conjure,conquistador consanguinity,conscription,consecrate,conservative,conservatory,consign,conspicuous,conspire,constancy,constituent,consumptive,contemplate,contemplative,contend,contentious,contiguous,continence,contingent,contraindicate,contravene,contrite,contumacious contumelious,convalescence,convene,conventional,converge,conviviality,convoke,copious,cordial,corporeal,corpulence,corroborate,countermand,countersign,covert,credence,credible,creditable,creditor,credulous,crescendo,crescent,culpable,cuneiform,cupidity,curate,curator,cursory,cygnet,debilitate,debit,debonair,decadence,decimate,declaim,decorous,deduction,defamation,defenestration,defer,deify,deism,deity,delectable,delineate,delude,demise,demonstrable,demonstrative,denigrate,denomination,denominative,denounce deplore,deport,depose,depravity,deprecate,depreciate,depredation,depute,deride,desecrate,desist,despair,despicable,despondent,deter,determinant,determinate,deviate,devious,devise,dexterous,dextral,dictate,diction,dictum,diffident,diffuse,dilapidated,diminution,disaffection,discern,discerning,disclaim,disclosure,discord,discourse,discredit,discrepant,discrete,discretion,discursive,disdain,disillusion,disinclination,disingenuous,disjunctive,disparage,dispassionate,dispel,dispeople,disperse,disquisition,disrepute,disseminate dissimulate dissipated,dissolute,dissonance,distend,distraught,diurnal,divergent,divert,divest,dividend,divisive,docent,docile,doctrine,dogmatic,dolorous,domestic,domicile,dominion,dormant,dualism,dubious,ductile,dulcet,duodecimal,duplicity,duress,edict,edifice,edify,educe,efface,effect,effectual,effervescent,efficacy,effrontery,egalitarian,egocentric,egotism,egregious,egress,ejaculation,elaborate,elate,elicit,elongate,eloquence elucidate,elusive,emancipate,embellish,eminent,emissary,emit,emotive,emulate,enervate,engender,enigmatic,enrapture,entity,enumerate,epistolary,equanimity,equestrian,equilibrist,equine,equinox,equitable,equitation,equivocal,equivocate,erratic,escutcheon,estival,estivate,evanescent,evict,evince,evoke,exacerbate,exact,exalt,exanimate,excommunicate,excruciating exculpate,excrescence excoriate,exculpate execrable,executrix,exemplify,exempt,exercitation,exhaustive,exhort,exigency,exonerate,exorbitant,exotic,expatiate,expatriate,expediency,expedite,expeditious,explicate,explicit,exponential,exposé,exposition,expository,expound,extemporaneous,exterminate,extirpate,extol,extract,extradite extraneous,extricate,extrovert,fable,facade,facet,facilitate,facility,faction,factious,factitious,factotum,fallacious,fallacy,fallible,fanaticism,fastidious,feign,felicific,felicitous,felicity,ferrous,fervor,fetid,fidelity,filial,finality,finite,flagellation,flagrant,florid,flume,flux,foreclose,formalism,formulary,forte,fortitude,fortuitous,fracas,fraternal,fraternize,fraudulent,frivolous,frugal,fugacious,fugitive,fugue,furtive,garrulous,gelid,gendarme,generate,generative,generic,genteel,gentile,gentry,gerund,gestation,gesticulate gradient,gratify,gratuitous,grave,gravitate,gregarious,grievous,habitat,habitation,habituate,herbage,herbarium,herbivore,homicide,homo sapiens,horticulture,hostile,igneous,ignoble,ignominy,illicit,illiterate,illusion,imbibe,immaterial,immemorial,immure,immutable,impale,impecunious,impede,impel,imperial,imperialism,imperil,impertinent,impervious,impetuous,impetus,implacable,implicate,implicit,importune,impose,imposition,impotent,impregnable,impropriety,impugn,impulsive,impunity,impute,inadvertent,inalienable,inaudible,inaugurate,incapacitate,incendiary,inception,incessant,incidental,incipient,incisive,incite,incognito,incongruous,incontrovertible,incorporate,incorrigible,increment,incur,indelible,indeterminable,indict, indigenous indigence,indispose,indissoluble,indoctrinate,indolence,indomitable,indubitable,induce,induct,induction,indulgent inept,inequitable,inertia,inexorable,inexplicable,infamous,infelicitous,infidel,infinitesimal,infinitive,infirmity,infraction,infringe,ingest,ingratiate,inherent,inimical,iniquity,injunction,innate,innocuous,innovate,inordinate,inquest,insatiable,inscription,inscrutable insidious,insipid,insoluble,insolvent,instigate,insular,insulate,insuperable,insurgent,insurmountable,insurrection,integral,integrity,intellectualize,intelligentsia,intelligible,inter,intercede,interdict,interim,interjacent,interject,interlinear,interlude,intermediary,interminable,intermittent,internecine,interpolate,interpose,interregnum,interrogation,intersperse,interstellar,intervene,intimate,intimidate,intractable,intrepid,introspection,introvert intrusive,inundate,invective,inveigh,inventory,inverse,investiture,invidious,invincible,invoke,irascible,ire,irrepressible,irresolute,irreverence,irrevocable,itinerant,itinerary,jocund,judicable,judiciary,judicious,juncture,jurisprudence,jussive,justification,juvenilia,juxtapose,laconic lacustrine lament languid languish lapidary lassitude latent,latitude,latitudinarian,laud,laudable,laudatory,lavation,lavish,lectern legacy,legate,legible,legislation,legislative,levitation,levity,libel,liberal,libertarian,libertine,libretto,ligament,ligature,linguistic,linguistics,lionize,liquefaction,literal,littoral locative,longevity,longitude,loquacious,lucent,lucid,ludicrous,lunar,lurid,magistrate,magnanimous,magnate,magniloquent,magnitude,maladjusted,maladroit,malady,malapropism,malediction,malefactor,malevolent,malfeasance,malign,malignant,malleable,malocclusion,malodorous manacle,mandate,manifest,manipulate,manor,manual,maritime,materialism,matriarch,matron,mediate,medieval mellifluous,memoir,mendacity,mensal,mercenary mercurial,meretricious,meridian,meticulous,militate,militia,millennium,miserly,miscreant,misnomer,missive,mitigate,modulate,modus operandi,modus vivendi mollify,monitor,monstrance,moratorium,moribund,morose,mortal,mortgage,mortician,mortify,motif,mountebank,multifarious,multiparous,multiplicity,multitudinous,mundane,municipal,munificence,muniment,mural,naive naturalism,naturalist,naturalize,nautical,nefarious nepotism,nescience,neutrality,neutralize,nihilism,noctambulist,noctilucent,nocturnal,nocturne,nomenclature,nominal,noncommittal,nondescript,notorious,novel,novice,noxious,null,nullify,numerology,numinous,nuncio,obdurate,obfuscate,obliterate,oblivious,obloquy,obscure obsequious,observatory,obsession obstreperous obtrusive,obviate Occident,occlude,odious,officious,olfactory,ominous,omnibus,omnifarious,omnipotent,omniscience,omnivorous,opaque opportune,oppress,oppugn,optimism,optimize,opulence,oration,ordain,ordinance,ordnance,ostensible,ostentatious,otiose,pacific,pacifism,pallid palpable,paramount,parity 	parsimonious partake of,parterre,partiality,participle,particularism,partisan,parvenu,patent,paternal,paternity,patriarch,patrician,patricide,patrimony,patristics,patronize,paucity,pecuniary,pedestal,pedestrian,pedigree,pedometer,pejorative,pellucid,penal,pendulous penury,perambulate,percolate,peregrination,peremptory,perfidious perfunctory,perjury,perpetual,perquisite,perspicacious perspicuous,pertinacious,peruse,pervasive,pessimist,petulant,piety placate,placid,plebiscite,plenipotentiary,plenitude,pluralistic,plurality,poignant ponderous,pontoon,populace,populist,portage,portal,portend,portico,postdate,posterity,posthumous,postpositive,postscript,potent,potentate,pragmatic,preamble,precedent,precept,precipitate,precipitous,preclude,precocious,precursor,predatory,predetermine,predilection,prefect,prelude,premise,premium,premonition,preoccupied,prerogative,presage,prescience,prescript,presentiment,presumptive,pretense,pretentious,prevail,prevalent prevaricate,prey,prima donna,primacy,primal,primate,primogeniture,proactive,probate,probe,probity,procrastinate,prodigal,profligate profound profusion prolapse prolific promulgate,propinquity,propitious,proponent,propound,proprietor,proscribe,prospective,prospector,prospectus,protract,protrude,provident,provincial,provisional,proviso,provoke,proximate,proximity,prudent,publican,pueblo,puerile,pugilist,pugnacious,pulchritude,punctilious pungent,punitive,pusillanimous,putative,putrefaction,quadrilateral,quandary,quartile,query,quiddity,quid pro quo,quiescent,quietude,quintessence,quotidian,ramification rapacious,rapine,ratification,ratiocination,rational,rationale,rationalize,raucous,reactionary,realia,rebus,recapitulate,recession,reclusive,recondite,recreant,rectify,rectitude,recur,redact redolent,redoubtable,redundancy,redux,referendum,refraction,refractory,refuge,refugee,refute,regal,regalia,regent,regicide,regimen,regressive,reiterate relegate,relic,remand,remiss,remission,remit,remnant,remonstrate,remote,remuneration,renunciation,repatriation,replete reprehensible,repress,reprobate,reprove,repudiate,repugnant,repute,requiem,requite,rescind,residual,resolute,respiration,respite resurgence reticent,retinue,retract,retribution,retrograde,retrospect,revel revere,revert,revile,revitalize,revoke,risible,rostrum,sacerdotal,sacrament,sacrilege,sacristy,sacrosanct,sagacious,salubrious,salutary,salutation,sanctification,sanction sanguine sapid,sapient,satirical savant,savor,scribe,scrupulous,secede,seclude,sedate,sedentary,sediment,sedition,self-determination,seminal,sempiternal,senescent,senility,sensory,sensual,sensuous,sententious,sentient,serf,servile,servitor,servitude,signal,signet,simian,similitude,simile,simulate,simultaneity,sinecure,sine qua non,sinister,sinistral,socialism,sociology,sociopath,solarium,solemnity solicitude,soliloquy,solipsism,solitude,solstice,somber sordid,sororal,specious,specter spontaneity stagnant,stately,statesmanship,status quo,statute,statutory,stellar,stellate stipend,stolid strident stultify,stupefaction,suave,subaltern,subduction,sublingual,subservient,subside,subsidiary,subsidize,substantial,substantiate,substantive,subterfuge,subterranean,subvert,succinct,succor,sullen,sumptuous,superannuated,supercilious,superficial,superfluous,supernal,supernumerary,superpose,superscript,supersede,supervene,supplicant,suppress,supranational surfeit,surmise,surreptitious,surrogate,sustain,sustenance,sylvan,sylvatic,tabulate tacit taciturn tact,tactile talon,tangent,tangible,tantamount,tempestuous,temporal,temporize,tenacious,tenant,tenet,tenure,tercet,terminal,terminate,terra firma,terrarium,terrestrial,terse,tertiary,timidity,torpor torrid,totalitarianism,tract,tractile,traduce,transcend,transcribe,transfix,transgress,transient,transitive,translucent,transmigration,transom,transpire,transpose,transubstantiation,transverse,traverse travesty tremulous trepidation,tribunal,tributary,tribute,tripartite,truncate turbulence turpitude,turret,tutelage,ubiquitous,ulterior,ultimate,ultimatum,unalterable,unanimity,unassailable,unassuming,unavailing,undulate,unguent,unilateral,unique,univocal,urban,urbane,usurp,usury,utilitarian,uxorian,uxoricide,vacillate vacuous Vainglory,valedictorian,vapid,variance,variegated,vehement venerate ventral,venture,veracity,verbal,verbalize,verbatim,verbiage,verbose,verify,verisimilitude,veritable,vermiform vernalize,versification,vertigo,vespers,vested,via,via media,viaduct,vicegerent,vicinage vicinal vilify vindicate vindictive,viniculture,vinous,vintage,vintner,virile,virilism,virtuoso,virulent,visage,visionary,vista,vital,vitality,vituperation,vivacity,vivify,vocalize,vocation,vociferous,volant,volatile,voluble,vulnerable",
	german: "abandon,abet,abide,abreast,ache,afford,ahead of,allegiance,altogether,anger,answer,array,ask,aurochs,aware,awareness,baby,bairn,ban,baneful,banquet,bargain,baron,barrow,bathe,bawl,beacon,bear up,bearing,beetle,before,beforehand,befoul,beg,begin,behavior,behaviour,behest,behold,behoof,belief,belittle,belly,beseech,bethink,betoken,bidding,bide,big,birthday,bison,bite,blessing,blin,bliss,bloom,blossom,blunder,boar,body, embodiment,bolster,boon,boulevard,brand,breadth,break,break bread,breed,brotherly,brush,bubble,bud,bug,build,bull,buoy,burgeon,bush,business,buy,calf,calling,care,carouse,chagrin,chic,child,chilly,choose,chore,cleanse,clever,clue,cluster,cold,come,cow,craft,crafty,cry,cunning,daily,dapper,dashing,deadly,deal in,deem,deer,defile,deft,delayed,demean,dirt,dismay,do,doe,dog,dove,down, dune,drink,drive,drudge,drudgery,dye,earl,earnest,earth,easterly,eastern,eastward,eat,eerie,eld,elderly,eldritch,else,end,enlightened,ere,erstwhile,espy,etiquette,even,fair,fairness,fallow,fare,farrow,fast,fatherlike,fatherly,fathom,fear,feed,feel,feeling,fell,ferd,fey,fill up,first,fit,fitting,flag,flat,flood,follow,fond,forbid,forebode,forecast,foregoing,foremost,foreshadow,forestall,foretell,forgather,forlet,former,forsake,frame,freedom,freezing,fremd,fresh,fret,friendly,frith,fulfill,fully,furlough,furnish,gain,gainful,gallivant,garden,gather,gather up,gauge,get,get to,gift,give,give up,gladness,glee,go abroad,go on,god, goddess,godhead,good,gospel,grasp,great,green,greet, regret,grill,grim,ground,group,grove,guess,guide,guise,hallmark,hallowed,halt,handsel,happiness,harbinger,harbor,harbour,hardship,hart,hate,haven,head,hearth,height,help,helpful,hen,herald,here,hill,hind,hint,hire,hit,hog,hold,holiday,holm,holt,holy,hound,hue,huge,hunch,hurt,idle,ilk,in line,in vogue,inkling,insightful,irk,island,itch,job,keen,keep,ken,key,kid,kind,kindly,king,know,knowledgeable,lamb,land,landscape,late,lave,lawful,leader,lean,leaning,lear,lease,leave,length,lich,lie,lifespan,lifetime,lifework,like,likeness,line,lined up,lineup,list,lit,little,livelihood,living,loathe,loftiness,longing,look,lot,loving,lower,lush,lust,main,make,make known,makeup,manifold,many,mark,match,mean,meaningful,meed,meet,merriment, mirth,midday,midriff,mindful,mindset,mistake,mixed,motherly,mound,mourn,near,neat,new,newborn,nigh,nightly,nosh,note,now,odd,of yore,old,ordeal,other,outlandish,outline,outlook,oven,overset,overwhelm,ox,paddock,park,path,perform,pick,pig,plight,pound,prate,prattle,put down,queer,quick,raise,raising, rearing,range,rank,rathe, rather,reach,rear,regard,renew,rest,rife,right,rightful,rinse,road,roe,rot,rove,row,say,scarf,scorn,scrub,see,seeing,seek,seem,seethe,selfhood,selfsame,sell,set,shade,shame,shape,shaw,sheep,shop,shore up,show,shrewd,shut,shy,sight,skill,skillful,sleeping,slumbering,small,smart,smithery,smithy,smooth,snack,snake,snell,sob,soothsay,sore,sorrow,sound,sow,speak,speech,speedy,spell,spot,stag,stale,stamp,start,stay,steady,steer,stern,stint,stock,stop,stour,stove,straight,strain,sundry,sup,sup, sip,swallow,swanky,swift,swill,swine,take a trip,take in,talk,tarry,teach,tease,teeming,teenhood,tell,thicket,thinking,thought,thoughtful,threat,thrill,throe,throw,tide,tier,time,tiny,tip off,token,tongue,touch,track,trade,trek,trendy,troth,truth,twi-,twin,twofold,uncouth,undergird,understand,undertake,undertaking,up to speed,uphold,uplifting,uptown,utter,utterly,wage,wail,wait, await,waking,wale,want,wark,warm,warning,warranted,wary,wash,wassail,watch,watchful,way,weald/wold,wed,wedlock,wee,ween,weep,weighty,weird,welfare,well,wend,western,while,whilom,whine,whole,wholesome,wholly,width,wild,will,winsomeness,wise,wish,wit/wot,woe,womanly,womb,wood,wordbook,work,worldly,worm,worthwhile,wrap up,wrath,writ,writing,yard,yearly,yearning,yellow,young,youth,youthful",
	adverb: "abnormally,abruptly,absently,absentmindedly,absolutely,absurdly,abundantly,abysmally,accidentally,accurately,actively,acutely,adamantly,additionally,adequately,admirably,adroitly,adventurously,advisedly,affectingly,affectionately,aggressively,agonizingly,aimlessly,alarmingly,alertly,alluringly,alternatively,altruistically,amazingly,ambitiously,amicably,amply,amusingly,analytically,angelically,angrily,annually,anonymously,antagonistically,anxiously,appallingly,appealingly,apprehensively,appropriately,approvingly,arbitrarily,ardently,aridly,arrogantly,articulately,artificially,assiduously,assuredly,astonishingly,astutely,athletically,atrociously,attractively,audaciously,audibly,auspiciously,austerely,authentically,authoritatively,autocratically,avidly,awkwardly,bashfully,beguilingly,beneficially,benevolently,bitterly,blandly,blatantly,bleakly,blindly,blithely,bluntly,boastfully,boldly,boorishly,bountifully,brashly,bravely,brazenly,briefly,brightly,brilliantly,briskly,broadly,brusquely,brutally,buoyantly,busily,buxomly,callously,calmly,candidly,capably,capriciously,carefully,carelessly,carnally,casually,cataclysmically,categorically,caustically,cautiously,centrally,ceremonially,changeably,charmingly,cheaply,cheerfully,chiefly,childishly,churlishly,civilly,cleverly,climatically,cliquishly,clumsily,coarsely,cogently,coherently,collectively,comically,commendably,compassionately,competently,conceitedly,conceptually,concisely,conclusively,confidentially,confidently,congenially,conscientiously,consciously,consensually,consentingly,consequently,considerably,considerately,conspicuously,constantly,contemporaneously,contentiously,continually,conveniently,conventionally,coolly,copiously,cordially,correctly,correspondingly,corruptly,courageously,courteously,covertly,cowardly,cravenly,credulously,crisply,critically,crookedly,crossly,crucially,crudely,cruelly,cryptically,culturally,cunningly,curtly,curvaceously,customarily,daintily,dangerously,dauntlessly,dazzlingly,dearly,debatably,deceitfully,decently,deceptively,decidedly,decreasingly,deeply,deferentially,defiantly,deftly,deleteriously,deliberately,delicately,delightfully,densely,dependently,derisively,desolately,despondently,destructively,developmentally,deviously,devotedly,diabolically,dictatorially,diligently,dimly,diplomatically,directly,disastrously,discourteously,discreetly,discriminately,disdainfully,disgracefully,dismally,disorderly,disparagingly,disproportionally,dissolutely,distinctly,distressingly,divinely,dogmatically,doubtfully,drably,dramatically,drastically,dreadfully,drolly,drunkenly,dryly,dubiously,dully,dynamically,eagerly,easily,ecstatically,eerily,effectively,effeminately,egotistically,elaborately,electrifyingly,elegantly,eloquently,eminently,emotionally,emphatically,endlessly,energetically,enjoyably,enormously,enterprisingly,enthusiastically,enticingly,entirely,enviably,enviously,equally,erotically,erratically,erroneously,esoterically,especially,essentially,eternally,euphorically,evasively,evenly,evidently,exceedingly,excellently,exceptionally,excessively,excitedly,excruciatingly,exhilaratingly,exorbitantly,expectantly,expediently,expertly,explicitly,expressly,exquisitely,extensively,extraordinarily,extravagantly,extremely,extrovertly,exuberantly,factually,faintly,faithfully,falsely,famously,fanatically,fancifully,fantastically,fashionably,fastidiously,fatally,fatefully,faultlessly,favorably,fearfully,feebly,ferociously,fervently,fiendishly,fiercely,financially,finely,firmly,fitfully,flagrantly,flamboyantly,flatly,fleetingly,flexibly,flippantly,flowerily,fluently,fondly,foolishly,forcefully,forgetfully,forlornly,formally,fortuitously,fortunately,foully,frailly,frankly,frantically,fraternally,fraudulently,freely,frenetically,frequently,freshly,frightfully,frigidly,frivolously,frugally,fundamentally,furiously,furtively,gaily,gallantly,gaudily,generously,gentlemanly,gently,ghastly,gigantically,gladly,glamorously,glaringly,gleefully,glibly,gloriously,glumly,goodly,gracefully,graciously,grandly,graphically,gratuitously,gravely,greedily,grievously,grimly,grossly,grotesquely,grudgingly,gruelingly,gruffly,guardedly,habitually,haggardly,handily,handsomely,haphazardly,happily,harmfully,harmoniously,harshly,hastily,heartlessly,heavenly,heavily,hectically,hedonistically,heedlessly,heinously,hellishly,helpfully,heroically,hesitantly,hideously,highly,hilariously,hollowly,honestly,hopefully,horrendously,horribly,hotly,hugely,humanely,humorously,hungrily,hygienically,hypnotically,hysterically,ideally,idiomatically,idiotically,ignominiously,ignorantly,illustriously,immaculately,immensely,immoderately,immodestly,immorally,immovably,impartially,impatiently,impeccably,imperfectly,imperiously,impersonally,impertinently,impetuously,impolitely,importantly,impudently,impulsively,inaccurately,inadequately,inadvertently,inanely,incessantly,incidentally,incoherently,inconsistently,incorrectly,increasingly,incredibly,indecently,indefinitely,independently,indiscriminately,indisputably,indistinctly,indubitably,indulgently,industriously,ineffectually,ineptly,inevitably,infamously,infectiously,infinitely,influentially,informally,infrequently,ingeniously,inherently,initially,injudiciously,innately,innocently,inordinately,inquisitively,insanely,insatiably,inscrutably,insincerely,insistently,insolently,insufferably,insultingly,intelligently,intelligibly,intensely,intentionally,interminably,intermittently,intrepidly,intricately,intrinsically,invariably,invigoratingly,irascibly,ironically,irrationally,irrefutably,irregularly,irresponsibly,irritably,jauntily,jealously,jocularly,jointly,jokingly,joyfully,joyously,jubilantly,judiciously,justifiably,justly,keenly,kindly,kingly,knowingly,laboriously,lackadaisically,laconically,lamely,lasciviously,latently,laudably,lavishly,lawlessly,lazily,legitimately,leisurely,leniently,lethargically,lewdly,liberally,licentiously,lightly,limply,listlessly,lively,locally,logically,longingly,loosely,loquaciously,loudly,lovingly,lucidly,ludicrously,lustfully,lustily,luxuriantly,madly,magnanimously,magnetically,mainly,malevolently,maliciously,malignantly,manifestly,mannerly,marvelously,massively,masterly,materially,meekly,melodramatically,memorably,menacingly,mercifully,meritoriously,merrily,methodically,meticulously,mildly,mindfully,minutely,miserably,mistakenly,mockingly,modestly,momentarily,monetarily,monotonously,monstrously,monthly,monumentally,moodily,morbidly,morosely,mortally,mournfully,mundanely,murderously,mutinously,mysteriously,naively,nakedly,naturally,nearby,neatly,negatively,neglectfully,negligibly,neighborly,nervously,neurotically,newly,nicely,nimbly,noisily,nonchalantly,normally,notably,numerically,obediently,objectively,obligingly,obliquely,obnoxiously,obscenely,obscurely,obsequiously,obsessively,obtrusively,obviously,oddly,officially,ominously,onerously,opaquely,openly,oppressively,optimistically,opulently,orderly,ordinarily,ornamentally,ornately,ostensibly,ostentatiously,outlandishly,outwardly,overconfidently,overly,painfully,painstakingly,palatably,paradoxically,pardonably,parsimoniously,partially,passionately,passively,patently,pathetically,peacefully,peculiarly,pensively,perennially,perfectly,perilously,permissively,perpetually,persuasively,pertly,pessimistically,petulantly,phenomenally,pictorially,pivotally,placidly,plainly,plausibly,playfully,pleasantly,pleasingly,plentifully,poignantly,pointedly,pointlessly,politely,politically,pompously,ponderously,poorly,popularly,pornographically,positively,potentially,potently,powerfully,practically,precariously,preciously,precisely,preliminarily,prematurely,preposterously,presumably,presumptuously,prickly,primarily,princely,principally,privately,prodigiously,productively,profanely,professionally,proficiently,profitably,profoundly,profusely,prominently,promptly,properly,propitiously,proportionally,providentially,provisionally,provocatively,prudently,psychedelically,publicly,punctually,purely,purposely,putridly,queenly,queerly,questionably,quickly,quietly,quirkily,quixotically,racially,radically,rancorously,randomly,rapaciously,rapidly,rarely,rashly,rationally,ravenously,ravenously,rearward,reasonably,rebelliously,recklessly,regretfully,relentlessly,reliantly,reluctantly,remotely,repeatedly,resentfully,resiliently,resolutely,resoundingly,respectively,responsively,restfully,restlessly,reverentially,reverently,richly,ridiculously,righteously,rightfully,rigidly,rigorously,riotously,ritualistically,robustly,romantically,roughly,routinely,rowdily,rudely,ruthlessly,sacredly,sadistically,sadly,safely,sarcastically,sassily,satanically,saucily,savagely,scandalously,scarcely,scathingly,scholarly,scornfully,secularly,securely,sedately,seductively,seemingly,seemly,selectively,selfishly,sensationally,senselessly,sensually,sentimentally,serenely,seriously,severely,sexually,shabbily,shakily,shamefully,shamelessly,sharply,sheepishly,shockingly,shortly,shrewdly,shrilly,shyly,sickly,silently,singly,singularly,sinisterly,sizably,skeptically,skillfully,sleepily,slightly,sloppily,slovenly,slowly,slyly,smartly,smoothly,smugly,snidely,snobbishly,soberly,socially,softly,solemnly,solidly,somberly,soothingly,sorrowfully,sourly,spaciously,sparingly,spasmodically,specially,specifically,spectacularly,speculatively,speedily,spinelessly,spiritually,spitefully,splendidly,spontaneously,sporadically,spotlessly,sprightly,spryly,squalidly,stately,statically,staunchly,staunchly,steadfastly,steadily,stealthily,steeply,sternly,stiffly,stimulatingly,stirringly,strangely,strenuously,strictly,strikingly,strongly,stubbornly,studiously,stunningly,stupidly,sturdily,stylishly,suavely,sublimely,substantially,subtly,successfully,succinctly,suddenly,suggestively,suitably,sullenly,summarily,superbly,superficially,superlatively,supernaturally,supposedly,supremely,surly,surprisingly,surreptitiously,suspiciously,sweetly,swiftly,symmetrically,sympathetically,systematically,tactfully,tamely,tangibly,tastefully,tearfully,tediously,temperamentally,tempestuously,temporally,tenaciously,tenderly,tensely,tentatively,terribly,terrifically,tersely,testily,theatrically,thickly,thinly,thirstily,thoroughly,thoughtfully,thoughtlessly,thrillingly,thunderously,tightly,timelessly,timidly,timorously,tiredly,tirelessly,tolerably,tolerantly,torpidly,tortuously,totally,traditionally,tragically,tranquilly,traumatically,treacherously,tremendously,trivially,truthfully,tumultuously,typically,tyrannically,ultimately,unambiguously,unassailably,unbearably,uncaringly,unceasingly,uncertainly,uncivilly,unclearly,uncommonly,unconditionally,unconsciously,uncontrollably,undeniably,understandably,undoubtedly,unduly,uneasily,unemotionally,unendingly,unequally,unequivocally,unerringly,unevenly,uneventfully,unexpectedly,unfairly,unfashionably,unfathomably,unflinchingly,unforgivably,unfortunately,unfriendly,ungainly,ungentlemanly,ungraciously,unhesitatingly,uniformly,unintelligently,unintentionally,uniquely,unlikely,unmannerly,unnaturally,unpleasantly,unquestionably,unrealistically,unreasonably,unreliably,unremittingly,unreservedly,unrestrainedly,unruly,unscrupulously,unseemly,unselfishly,unshakably,unsophisticatedly,unspeakably,unstintingly,unsuccessfully,unusually,unwaveringly,unwisely,unwittingly,upright,urbanely,urgently,uselessly,utterly,vacantly,vacuously,vaguely,vainly,valiantly,variably,variously,vastly,vehemently,venomously,verbosely,verifiably,vicariously,viciously,victoriously,vigorously,vilely,violently,virtually,virtuously,vitally,vivaciously,vividly,vociferously,voluminously,voluntarily,voluptuously,voraciously,vulgarly,vulnerably,wantonly,warily,warmly,watchfully,weakly,wearily,weekly,whimsically,wholesomely,wholly,wickedly,widely,wildly,willingly,wily,wisely,wobbly,woefully,woodenly,worldly,worshipfully,worthily,wretchedly,wrongly,yearly,zealously",
	commonly: "abandonned,aberation,abilties,abilty,abondon,abbout,abotu,abouta,aboutit,aboutthe,abscence,abondoned,abondoning,abondons,aborigene,accesories,accidant,abortificant,abreviate,abreviated,abreviation,abritrary,absail,absailing,absense,absolutly,absorbsion,absorbtion,abudance,abundacies,abundancies,abundunt,abutts,acadamy,acadmic,accademic,accademy,acccused,accelleration,accension,acceptence,acceptible,accessable,accidentaly,accidently,acclimitization,accomadate,accomadated,accomadates,accomadating,accomadation,accomadations,accomdate,accomodate,accomodated,accomodates,accomodating,accomodation,accomodations,accompanyed,accordeon,accordian,accoring,accoustic,accquainted,accrediation,accredidation,accross,accussed,acedemic,acheive,acheived,acheivement,acheivements,acheives,acheiving,acheivment,acheivments,achievment,achievments,achive,achived,achivement,achivements,acknowldeged,acknowledgeing,ackward,acommodate,acomplish,acomplished,acomplishment,acomplishments,acording,acordingly,acquaintence,acquaintences,acquiantence,acquiantences,acquited,activites,activly,actualy,acuracy,acused,acustom,acustommed,adavanced,adbandon,addional,addionally,additinally,additionaly,additonal,additonally,addmission,addopt,addopted,addoptive,addres,addresable,addresed,addresing,addressess,addtion,addtional,adecuate,adequit,adhearing,adherance,admendment,admininistrative,adminstered,adminstrate,adminstration,adminstrative,adminstrator,admissability,admissable,admited,admitedly,adn,adolecent,adquire,adquired,adquires,adquiring,adres,adresable,adresing,adress,adressable,adressed,adressing,adventrous,advertisment,advertisments,advesary,adviced,aeriel,aeriels,afair,afficianados,afficionado,afficionados,affilate,affilliate,affort,aforememtioned,againnst,agains,agaisnt,aganist,aggaravates,aggreed,aggreement,aggregious,aggresive,agian,agianst,agin,agina,aginst,agravate,agre,agred,agreeement,agreemnt,agregate,agregates,agreing,agression,agressive,agressively,agressor,agricultue,agriculure,agricuture,agrieved,ahev,ahppen,ahve,aicraft,aiport,airbourne,aircaft,aircrafts,airporta,airrcraft,aisian,albiet,alchohol,alchoholic,alchol,alcholic,alcohal,alcoholical,aledge,aledged,aledges,alege,aleged,alegience,algebraical,algorhitms,algoritm,algoritms,alientating,alledge,alledged,alledgedly,alledges,allegedely,allegedy,allegely,allegence,allegience,allign,alligned,alliviate,allopone,allopones,allready,allthough,alltime,alltogether,almsot,alochol,alomst,alot,alotted,alowed,alowing,alreayd,alse,alsot,alternitives,altho,althought,altough,alusion,alwasy,alwyas,amalgomated,amatuer,amature,amendmant,Amercia,amerliorate,amke,amking,ammend,ammended,ammendment,ammendments,ammount,ammused,amoung,amoungst,amung,amunition,analagous,analitic,analogeous,anarchim,anarchistm,anbd,ancestory,ancilliary,andd,androgenous,androgeny,anihilation,aniversary,annoint,annointed,annointing,annoints,annouced,annualy,annuled,anohter,anomolies,anomolous,anomoly,anonimity,anounced,anouncement,ansalisation,ansalization,ansestors,antartic,anthromorphization,anthropolgist,anthropolgy,anual,anulled,anwsered,anyhwere,anyother,anytying,aparent,aparment,apenines,aplication,aplied,apolegetics,apon,apparant,apparantly,appart,appartment,appartments,appealling,appeareance,appearence,appearences,appenines,apperance,apperances,appereance,appereances,applicaiton,applicaitons,appologies,appology,apprearance,apprieciate,approachs,appropiate,appropraite,appropropiate,approproximate,approxamately,approxiately,approximitely,aprehensive,apropriate,aproval,aproximate,aproximately,aquaduct,aquaintance,aquainted,aquiantance,aquire,aquired,aquiring,aquisition,aquitted,aranged,arangement,arbitarily,arbitary,archaelogical,archaelogists,archaelogy,archaoelogy,archaology,archeaologist,archeaologists,archetect,archetects,archetectural,archetecturally,archetecture,archiac,archictect,archimedian,architecht,architechturally,architechture,architechtures,architectual,archtype,archtypes,aready,areodynamics,argubly,arguement,arguements,arised,arival,armamant,armistace,arogant,arogent,aroud,arrangment,arrangments,arrengement,arrengements,arround,artcile,artical,artice,articel,artifical,artifically,artillary,arund,asetic,asfar,asign,aslo,asociated,asorbed,asphyxation,assasin,assasinate,assasinated,assasinates,assasination,assasinations,assasined,assasins,assassintation,assemple,assertation,asside,assisnate,assit,assitant,assocation,assoicate,assoicated,assoicates,assosication,asssassans,assualt,assualted,assymetric,assymetrical,asteriod,asthetic,asthetical,asthetically,asume,aswell,atain,atempting,atheistical,athenean,atheneans,athiesm,athiest,atorney,atribute,atributed,atributes,attaindre,attemp,attemped,attemt,attemted,attemting,attemts,attendence,attendent,attendents,attened,attension,attitide,attributred,attrocities,audeince,auromated,austrailia,austrailian,auther,authobiographic,authobiography,authorative,authorites,authorithy,authoritiers,authoritive,authrorities,autochtonous,autoctonous,automaticly,automibile,automonomous,autor,autority,auxilary,auxillaries,auxillary,auxilliaries,auxilliary,availabe,availablity,availaible,availble,availiable,availible,avalable,avalance,avaliable,avation,avengence,averageed,avilable,awared,awya,azn,baceause,backgorund,backrounds,bakc,banannas,bandwith,bankrupcy,banruptcy,baout,basicaly,basicly,bcak,beachead,beacuse,beastiality,beatiful,beaurocracy,beaurocratic,beautyfull,becamae,becames,becasue,beccause,becomeing,becomming,becouse,becuase,bedore,beeing,befoer,beggin,begginer,begginers,beggining,begginings,beggins,begining,beginnig,behavour,beleagured,beleif,beleive,beleived,beleives,beleiving,beligum,belive,belived,belives,belligerant,bellweather,bemusemnt,beneficary,beng,benificial,benifit,benifits,bergamont,Bernouilli,beseige,beseiged,beseiging,beteen,betwen,beween,bewteen,bilateraly,billingualism,binominal,bizzare,blaim,blaimed,blessure,Blitzkreig,boaut,bodydbuilder,bombardement,bombarment,bondary,Bonnano,borke,boundry,bouyancy,bouyant,boyant,Brasillian,breakthough,breakthroughts,breif,breifly,brethen,bretheren,briliant,brillant,brimestone,Britian,Brittish,broacasted,broadacasting,broady,Buddah,Buddist,buisness,buisnessman,buoancy,buring,burried,busines,busineses,busness,bussiness,caculater,cacuses,cahracters,calaber,calander,calculater,calculs,calenders,caligraphy,caluclate,caluclated,caluculate,caluculated,calulate,calulated,calulater,Cambrige,camoflage,campain,campains,candadate,candiate,candidiate,cannister,cannisters,cannnot,cannonical,cannotation,cannotations,cant,caost,caperbility,Capetown,capible,captial,captued,capturd,carachter,caracterized,carcas,carefull,careing,carismatic,Carmalite,Carnagie,Carnagie,carnege,carnige,Carnigie,Carnigie,carniverous,carreer,carrers,Carribbean,Carribean,cartdridge,Carthagian,carthographer,cartilege,cartilidge,cartrige,casette,casion,cassawory,cassowarry,casue,casued,casues,casuing,casulaties,casulaty,catagories,catagorized,catagory,Cataline,catapillar,catapillars,catapiller,catapillers,catepillar,catepillars,catergorize,catergorized,caterpilar,caterpilars,caterpiller,caterpillers,cathlic,catholocism,catterpilar,catterpilars,catterpillar,catterpillars,cattleship,causalities,Ceasar,Celcius,cellpading,cementary,cemetarey,cemetaries,cemetary,cencus,censur,cententenial,centruies,centruy,centuties,centuty,ceratin,cerimonial,cerimonies,cerimonious,cerimony,ceromony,certainity,certian,cervial,chalenging,challange,challanged,challege,Champange,changable,charachter,charachters,charactersistic,charactor,charactors,charasmatic,charaterized,chariman,charistics,chasr,cheif,cheifs,chemcial,chemcially,chemestry,chemicaly,childbird,childen,choosen,chracter,chuch,churchs,Cincinatti,Cincinnatti,circulaton,circumsicion,circut,ciricuit,ciriculum,civillian,claer,claerer,claerly,claimes,clas,clasic,clasical,clasically,cleareance,clera,clincial,clinicaly,cmo,cmoputer,co,coctail,coform,cognizent,coincedentally,colaborations,colateral,colelctive,collaberative,collecton,collegue,collegues,collonade,collonies,collony,collosal,colonizators,comander,comando,comandos,comany,comapany,comback,combanations,combinatins,combusion,comdemnation,comemmorates,comemoretion,comision,comisioned,comisioner,comisioning,comisions,comission,comissioned,comissioner,comissioning,comissions,comited,comiting,comitted,comittee,comitting,commandoes,commedic,commemerative,commemmorate,commemmorating,commerical,commerically,commericial,commericially,commerorative,comming,comminication,commision,commisioned,commisioner,commisioning,commisions,commited,commitee,commiting,committe,committment,committments,commmemorated,commongly,commonweath,commuications,commuinications,communciation,communiation,communites,compability,comparision,comparisions,comparitive,comparitively,compatabilities,compatability,compatable,compatablities,compatablity,compatiable,compatiblities,compatiblity,compeitions,compensantion,competance,competant,competative,competion,competitiion,competive,competiveness,comphrehensive,compitent,completedthe,completelyl,completetion,complier,componant,comprable,comprimise,compulsary,compulsery,computarized,concensus,concider,concidered,concidering,conciders,concieted,concieved,concious,conciously,conciousness,condamned,condemmed,condidtion,condidtions,conditionsof,conected,conection,conesencus,confidental,confidentally,confids,configureable,confortable,congradulations,congresional,conived,conjecutre,conjuction,Conneticut,conotations,conquerd,conquerer,conquerers,conqured,conscent,consciouness,consdider,consdidered,consdiered,consectutive,consenquently,consentrate,consentrated,consentrates,consept,consequentually,consequeseces,consern,conserned,conserning,conservitive,consiciousness,consicousness,considerd,consideres,consious,consistant,consistantly,consituencies,consituency,consituted,consitution,consitutional,consolodate,consolodated,consonent,consonents,consorcium,conspiracys,conspiriator,constaints,constanly,constarnation,constatn,constinually,constituant,constituants,constituion,constituional,consttruction,constuction,contstruction,consulant,consumate,consumated,contaiminate,containes,contamporaries,contamporary,contempoary,contemporaneus,contempory,contendor,contibute,contibuted,contibutes,contigent,contined,continous,continously,continueing,contravercial,contraversy,contributer,contributers,contritutions,controled,controling,controll,controlls,controvercial,controvercy,controveries,controversal,controversey,controvertial,controvery,contruction,conveinent,convenant,convential,convertables,convertion,conviced,convienient,coordiantion,coorperation,coorperations,copmetitors,coputer,copywrite,coridal,cornmitted,corosion,corparate,corperations,correcters,correponding,correposding,correspondant,correspondants,corridoors,corrispond,corrispondant,corrispondants,corrisponded,corrisponding,corrisponds,costitution,coucil,coudl,councellor,councellors,counries,countains,countires,countrie's,coururier,coverted,cpoy,creaeted,creche,creedence,critereon,criterias,criticists,critising,critisising,critisism,critisisms,critisize,critisized,critisizes,critisizing,critized,critizing,crockodiles,crowm,crtical,crticised,crucifiction,crusies,crystalisation,culiminating,cumulatative,curch,curcuit,currenly,curriculem,cxan,cyclinder,dacquiri,daed,dael,dalmation,damenor,dammage,Dardenelles,daugher,debateable,decendant,decendants,decendent,decendents,decideable,decidely,decieved,decison,decomissioned,decomposit,decomposited,decompositing,decomposits,decress,decribe,decribed,decribes,decribing,dectect,defendent,defendents,deffensively,deffine,deffined,definance,definate,definately,definatly,definetly,definining,definit,definitly,definiton,defintion,degrate,delagates,delapidated,delerious,delevopment,deliberatly,delusionally,demenor,demographical,demolision,demorcracy,demostration,denegrating,densly,deparment,deparmental,deparments,dependance,dependancy,dependant,deram,deriviated,derivitive,derogitory,descendands,descibed,descision,descisions,descriibes,descripters,descripton,desctruction,descuss,desgined,deside,desigining,desinations,desintegrated,desintegration,desireable,desitned,desktiop,desorder,desoriented,desparate,despict,despiration,dessicated,dessigned,destablized,destory,detailled,detatched,deteoriated,deteriate,deterioriating,determinining,detremental,devasted,develope,developement,developped,develpment,devels,devestated,devestating,devide,devided,devistating,devolopement,diablical,diamons,diaster,dichtomy,diconnects,dicover,dicovered,dicovering,dicovers,dicovery,dicussed,didnt,diea,dieing,dieties,diety,diferent,diferrent,differentiatiations,differnt,difficulity,diffrent,dificulties,dificulty,dimenions,dimention,dimentional,dimentions,dimesnional,diminuitive,dimunitive,diosese,diphtong,diphtongs,diplomancy,dipthong,dipthongs,dirived,disagreeed,disapeared,disapointing,disappearred,disaproval,disasterous,disatisfaction,disatisfied,disatrous,discontentment,discribe,discribed,discribes,discribing,disctinction,disctinctive,disemination,disenchanged,disiplined,disobediance,disobediant,disolved,disover,dispair,disparingly,dispence,dispenced,dispencing,dispicable,dispite,dispostion,disproportiate,disputandem,disricts,dissagreement,dissapear,dissapearance,dissapeared,dissapearing,dissapears,dissappear,dissappears,dissappointed,dissarray,dissobediance,dissobediant,dissobedience,dissobedient,distiction,distingish,distingished,distingishes,distingishing,distingquished,distrubution,distruction,distructive,ditributed,diversed,divice,divison,divisons,dum,doccument,doccumented,doccuments,docrines,doctines,documenatry,doens,doesnt,doign,dominaton,dominent,dominiant,donig,dosen't,doub,doulbe,dowloads,dramtic,draughtman,Dravadian,dreasm,driectly,drnik,druming,drummless,dupicate,durig,durring,duting,dyas,eahc,ealier,earlies,earnt,ecclectic,eceonomy,ecidious,eclispe,ecomonic,ect,eearly,efel,effeciency,effecient,effeciently,efficency,efficent,efficently,efford,effords,effulence,eigth,eiter,elction,electic,electon,electrial,electricly,electricty,elementay,eleminated,eleminating,eles,eletricity,elicided,eligable,elimentary,ellected,elphant,embarass,embarassed,embarassing,embarassment,embargos,embarras,embarrased,embarrasing,embarrasment,embezelled,emblamatic,eminate,eminated,emision,emited,emiting,emition,emmediately,emmigrated,emminent,emminently,emmisaries,emmisarries,emmisarry,emmisary,emmision,emmisions,emmited,emmiting,emmitted,emmitting,emnity,emperical,emphaised,emphsis,emphysyma,empirial,emprisoned,enameld,enchancement,encouraing,encryptiion,encylopedia,endevors,endevour,endig,endolithes,enduce,ened,enflamed,enforceing,engagment,engeneer,engeneering,engieneer,engieneers,enlargment,enlargments,Enlish,enourmous,enourmously,ensconsed,entaglements,enteratinment,enthusiatic,entitity,entitlied,entrepeneur,entrepeneurs,enviorment,enviormental,enviormentally,enviorments,enviornment,enviornmental,enviornmentalist,enviornmentally,enviornments,enviroment,enviromental,enviromentalist,enviromentally,enviroments,envolutionary,envrionments,enxt,epidsodes,epsiode,equialent,equilibium,equilibrum,equiped,equippment,equitorial,equivelant,equivelent,equivilant,equivilent,equivlalent,erally,eratic,eratically,eraticly,erested,errupted,esential,esitmated,esle,especialy,essencial,essense,essentail,essentialy,essentual,essesital,estabishes,establising,ethnocentricm,ethose,Europian,Europians,Eurpean,Eurpoean,evenhtually,eventally,eventhough,eventially,eventualy,everthing,everytime,everyting,eveyr,evidentally,exagerate,exagerated,exagerates,exagerating,exagerrate,exagerrated,exagerrates,exagerrating,examinated,exampt,exapansion,excact,excange,excecute,excecuted,excecutes,excecuting,excecution,excedded,excelent,excell,excellance,excellant,excells,excercise,exchanching,excisted,exculsivly,execising,exection,exectued,exeedingly,exelent,exellent,exemple,exept,exeptional,exerbate,exerbated,exerciese,exerpt,exerpts,exersize,exerternal,exhalted,exhibtion,exibition,exibitions,exicting,exinct,existance,existant,existince,exliled,exludes,exmaple,exonorate,exoskelaton,expalin,expatriot,expeced,expecially,expeditonary,expeiments,expell,expells,experiance,experianced,expiditions,expierence,explaination,explaning,explictly,exploititive,explotation,expropiated,expropiation,exressed,extemely,extention,extentions,extered,extermist,extint,extradiction,extraterrestial,extraterrestials,extravagent,extrememly,extremeophile,extremly,extrordinarily,extrordinary,eyar,eyars,eyasr,faciliate,faciliated,faciliates,facilites,facillitate,facinated,facist,familes,familliar,famoust,fanatism,Farenheit,fatc,faught,favoutrable,feasable,Febuary,Feburary,fedreally,feromone,fertily,fianite,fianlly,ficticious,fictious,fidn,fiel,fiels,fiercly,fightings,filiament,fimilies,finacial,finaly,financialy,firends,firts,fisionable,flamable,flawess,fleed,Flemmish,florescent,flourescent,flourine,fluorish,flourishment,follwoing,folowing,fomed,fomr,fonetic,fontrier,foootball,forbad,forbiden,foreward,forfiet,forhead,foriegn,Formalhaut,formallize,formallized,formaly,formelly,formidible,formost,forsaw,forseeable,fortelling,forunner,foucs,foudn,fougth,foundaries,foundary,Foundland,fourties,fourty,fouth,foward,Fransiscan,Fransiscans,freind,freindly,frequentily,frome,fromed,froniter,fucntion,fucntioning,fufill,fufilled,fulfiled,fullfill,fullfilled,fundametal,fundametals,funguses,funtion,furuther,futher,futhermore,futhroc,gae,galatic,Galations,gallaxies,galvinized,Gameboy,ganerate,ganes,ganster,garantee,garanteed,garantees,gardai,garnison,gauarana,gaurantee,gauranteed,gaurantees,gaurd,gaurentee,gaurenteed,gaurentees,geneological,geneologies,geneology,generaly,generatting,genialia,geographicial,geometrician,geometricians,gerat,Ghandi,glight,gnawwed,godess,godesses,Godounov,gogin,goign,gonig,Gothenberg,Gottleib,gouvener,govement,govenment,govenrment,goverance,goverment,govermental,governer,governmnet,govorment,govormental,govornment,gracefull,graet,grafitti,gramatically,grammaticaly,grammer,grat,gratuitious,greatful,greatfully,greif,gridles,gropu,grwo,Guaduloupe,Guadulupe,guage,guarentee,guarenteed,guarentees,Guatamala,Guatamalan,guerrila,guerrilas,guidence,Guilia,Guilio,Guiness,Guiseppe,gunanine,gurantee,guranteed,gurantees,guttaral,gutteral,habaeus,habeus,Habsbourg,haemorrage,haev,halarious,Hallowean,halp,hapen,hapened,hapening,happend,happended,happenned,harased,harases,harasment,harasments,harassement,harras,harrased,harrases,harrasing,harrasment,harrasments,harrassed,harrasses,harrassing,harrassment,harrassments,hasnt,Hatian,haviest,headquarer,headquater,headquatered,headquaters,healthercare,heared,heathy,Heidelburg,heigher,heirarchy,heiroglyphics,helment,helpfull,helpped,hemmorhage,herad,heridity,heroe,heros,hertiage,hertzs,hesistant,heterogenous,hieght,hierachical,hierachies,hierachy,hierarcical,hierarcy,hieroglph,hieroglphs,higer,higest,higway,hillarious,himselv,hinderance,hinderence,hindrence,hipopotamus,hismelf,histocompatability,historicians,hitsingles,holf,holliday,homestate,homogeneize,homogeneized,honory,horrifing,hosited,hospitible,hounour,housr,howver,hsitorians,hstory,hten,htere,htey,htikn,hting,htink,htis,humer,humerous,huminoid,humoural,humurous,husban,hvae,hvaing,hvea,hwihc,hwile,hwole,hydogen,hydropile,hydropilic,hydropobe,hydropobic,hygeine,hypocracy,hypocrasy,hypocricy,hypocrit,hypocrits,iconclastic,idaeidae,idaes,idealogies,idealogy,identicial,identifers,ideosyncratic,idesa,idiosyncracy,Ihaca,illegimacy,illegitmate,illess,illiegal,illution,ilness,ilogical,imagenary,imagin,imaginery,imanent,imcomplete,imediately,imense,imigrant,imigrated,imigration,iminent,immediatley,immediatly,immidately,immidiately,immitate,immitated,immitating,immitator,immunosupressant,impecabbly,impedence,implamenting,impliment,implimented,imploys,importamt,impressario,imprioned,imprisonned,improvision,improvments,inablility,inaccessable,inadiquate,inadquate,inadvertant,inadvertantly,inagurated,inaguration,inappropiate,inaugures,inbalance,inbalanced,inbetween,incarcirated,incidentially,incidently,inclreased,includ,includng,incompatabilities,incompatability,incompatable,incompatablities,incompatablity,incompatiblities,incompatiblity,incompetance,incompetant,incomptable,incomptetent,inconsistant,incoroporated,incorperation,incorportaed,incorprates,incorruptable,incramentally,increadible,incredable,inctroduce,inctroduced,incuding,incunabla,indefinately,indefineable,indefinitly,indentical,indepedantly,indepedence,independance,independant,independantly,independece,independendet,indespensable,indespensible,indictement,indigineous,indipendence,indipendent,indipendently,indispensible,indisputible,indisputibly,indite,individualy,indpendent,indpendently,indulgue,indutrial,indviduals,inefficienty,inevatible,inevitible,inevititably,infalability,infallable,infectuous,infered,infilitrate,infilitrated,infilitration,infinit,inflamation,influencial,influented,infomation,informtion,infrantryman,infrigement,ingenius,ingreediants,inhabitans,inherantly,inheritage,inheritence,inital,initally,initation,initiaitive,inlcuding,inmigrant,inmigrants,innoculated,inocence,inofficial,inot,inpeach,inpolite,inprisonment,inproving,insectiverous,insensative,inseperable,insistance,insitution,insitutions,inspite,instade,instatance,institue,instuction,instuments,instutionalized,instutions,insurence,intelectual,inteligence,inteligent,intenational,intented,intepretation,intepretator,interational,interbread,interchangable,interchangably,intercontinetal,intered,interelated,interferance,interfereing,intergrated,intergration,interm,internation,interpet,interrim,interrugum,intertaining,interupt,intervines,intevene,intial,intially,intrduced,intrest,introdued,intruduced,intrument,intrumental,intruments,intrusted,intutive,intutively,inudstry,inumerable,inventer,invertibrates,investingate,involvment,irelevent,iresistable,iresistably,iresistible,iresistibly,iritable,iritated,ironicly,irregardless,irrelevent,irreplacable,irresistable,irresistably,isnt,Israelies,issueing,itnroduced,iunior,iwll,iwth,Janurary,Januray,Japanes,jaques,jeapardy,jewllery,Johanine,jorunal,Jospeh,jouney,journied,journies,jstu,jsut,Juadaism,Juadism,judical,judisuary,juducial,juristiction,juristictions,kindergarden,klenex,knifes,knive,knowlege,knowlegeable,knwo,knwos,konw,konws,kwno,labatory,labled,labratory,laguage,laguages,larg,largst,larrry,lastr,lattitude,launchs,launhed,lavae,layed,lazyness,leage,leanr,leathal,lefted,legitamate,legitmate,leibnitz,lenght,leran,lerans,leutenant,levetate,levetated,levetates,levetating,levle,liasion,liason,liasons,libary,libell,libguistic,libguistics,libitarianisn,lible,lieing,liek,liekd,liesure,lieuenant,lieved,liftime,lightyear,lightyears,likelyhood,linnaena,lippizaner,liquify,liscense,lisence,lisense,listners,litature,literaly,literture,littel,litterally,liuke,livley,lmits,loev,lonelyness,longitudonal,lonley,lonly,loosing,lotharingen,lsat,lukid,lveo,lvoe,Lybia,maching,mackeral,magasine,magincian,magnificient,magolia,mailny,maintainance,maintainence,maintance,maintenence,maintinaing,maintioned,majoroty,maked,makse,Malcom,maltesian,mamal,mamalian,managable,managment,maneouvre,maneouvred,maneouvres,maneouvring,manisfestations,manoeuverability,manouver,manouverability,manouverable,manouvers,mantained,manuever,manuevers,manufacturedd,manufature,manufatured,manufaturing,manuver,mariage,marjority,markes,marketting,marmelade,marrage,marraige,marrtyred,marryied,Massachussets,Massachussetts,massmedia,masterbation,mataphysical,materalists,mathamatics,mathematican,mathematicas,matheticians,mathmatically,mathmatician,mathmaticians,mccarthyst,mchanics,meaninng,mear,mechandise,medacine,medeival,medevial,mediciney,medievel,mediterainnean,Mediteranean,meerkrat,melieux,membranaphone,memeber,menally,meranda,mercentile,messanger,messenging,metalic,metalurgic,metalurgical,metalurgy,metamorphysis,metaphoricial,meterologist,meterology,methaphor,methaphors,Michagan,micoscopy,midwifes,mileau,milennia,milennium,mileu,miliary,milion,miliraty,millenia,millenial,millenialism,millenium,millepede,millioniare,millitary,millon,miltary,minature,minerial,miniscule,ministery,minstries,minstry,minumum,mirrorred,miscelaneous,miscellanious,miscellanous,mischeivous,mischevious,mischievious,misdameanor,misdameanors,misdemenor,misdemenors,misfourtunes,misile,Misouri,mispell,mispelled,mispelling,missen,Missisipi,Missisippi,missle,missonary,misterious,mistery,misteryous,mkae,mkaes,mkaing,mkea,moderm,modle,moent,moeny,mohammedans,moil,moil,moleclues,momento,monestaries,monestary,monickers,monolite,Monserrat,montains,montanous,Montnana,monts,montypic,moreso,morgage,Morisette,Morrisette,morroccan,morrocco,morroco,mortage,mosture,motiviated,mounth,movei,movment,mroe,mucuous,muder,mudering,muhammadan,multicultralism,multipled,multiplers,munbers,muncipalities,muncipality,munnicipality,muscels,muscial,muscician,muscicians,mutiliated,myraid,mysef,mysogynist,mysogyny,mysterous,Mythraic,naieve,Naploeon,Napolean,Napoleonian,naturaly,naturely,naturual,naturually,Nazereth,neccesarily,neccesary,neccessarily,neccessary,neccessities,necesarily,necesary,necessiate,neglible,negligable,negociate,negociation,negociations,negotation,neice,neigborhood,neigbour,neigbourhood,neigbouring,neigbours,neolitic,nessasarily,nessecary,nestin,neverthless,newletters,Newyorker,nickle,nightfa;;,nightime,nineth,ninteenth,ninties,ninty,nkow,nkwo,nmae,noncombatents,nonsence,nontheless,noone,norhern,northen,northereastern,notabley,noteable,noteably,noteriety,noth,nothern,noticable,noticably,noticeing,noticible,notwhithstanding,noveau,Novermber,nowdays,nowe,nto,nucular,nuculear,nuisanse,Nullabour,numberous,Nuremburg,nusance,nutritent,nutritents,nuturing,obediance,obediant,obession,obssessed,obstacal,obstancles,obstruced,ocasion,ocasional,ocasionally,ocasionaly,ocasioned,ocasions,ocassion,ocassional,ocassionally,ocassionaly,ocassioned,ocassions,occaison,occassion,occassional,occassionally,occassionaly,occassioned,occassions,occationally,occour,occurance,occurances,occured,occurence,occurences,occuring,occurr,occurrance,occurrances,octohedra,octohedral,octohedron,ocuntries,ocuntry,ocurr,ocurrance,ocurred,ocurrence,offcers,offcially,offereings,offical,offically,officals,officaly,officialy,offred,oftenly,oging,ok,omision,omited,omiting,omlette,ommision,ommited,ommiting,ommitted,ommitting,omniverous,omniverously,omre,onot,onyl,openess,oponent,oportunity,opose,oposite,oposition,oppenly,oppinion,opponant,oppononent,oppositition,oppossed,opprotunity,opression,opressive,opthalmic,opthalmologist,opthalmology,opthamologist,optmizations,optomism,orded,organim,organistion,organiztion,orgin,orginal,orginally,orginize,oridinarily,origanaly,originall,originaly,originially,originnally,origional,orignally,orignially,otehr,oublisher,ouevre,oustanding,overshaddowed,overthere,overwelming,overwheliming,owrk,owudl,oxigen,oximoron,p0enis,paide,paitience,palce,paleolitic,paliamentarian,Palistian,Palistinian,Palistinians,pallete,pamflet,pamplet,pantomine,Papanicalou,paralel,paralell,paralelly,paralely,parallely,paranthesis,paraphenalia,parellels,parituclar,parliment,parrakeets,parralel,parrallel,parrallell,parrallelly,parrallely,partialy,particually,particualr,particuarly,particularily,particulary,pary,pased,pasengers,passerbys,pasttime,pastural,paticular,pattented,pavillion,payed,pblisher,pbulisher,peacefuland,peageant,peculure,pedestrain,peformed,peice,Peloponnes,penatly,penerator,penisula,penisular,penninsula,penninsular,pennisula,Pennyslvania,pensinula,peom,peoms,peopel,peotry,perade,percepted,percieve,percieved,perenially,perfomance,perfomers,performence,performes,perhasp,perheaps,perhpas,peripathetic,peristent,perjery,perjorative,permanant,permenant,permenantly,permissable,perogative,peronal,perosnality,perphas,perpindicular,perseverence,persistance,persistant,personel,personell,personnell,persuded,persue,persued,persuing,persuit,persuits,pertubation,pertubations,pessiary,petetion,Pharoah,phenomenom,phenomenonal,phenomenonly,phenomonenon,phenomonon,phenonmena,Philipines,philisopher,philisophical,philisophy,Phillipine,Phillipines,Phillippines,phillosophically,philospher,philosphies,philosphy,Phonecian,phongraph,phylosophical,physicaly,piblisher,pich,pilgrimmage,pilgrimmages,pinapple,pinnaple,pinoneered,plagarism,planation,planed,plantiff,plateu,plausable,playright,playwrite,playwrites,pleasent,plebicite,plesant,poenis,poeoples,poety,poisin,polical,polinator,polinators,politican,politicans,poltical,polute,poluted,polutes,poluting,polution,polyphonyic,polysaccaride,polysaccharid,pomegranite,pomotion,poportional,popoulation,popularaty,populare,populer,portait,portayed,portraing,Portugese,portuguease,portugues,posess,posessed,posesses,posessing,posession,posessions,posion,positon,possable,possably,posseses,possesing,possesion,possessess,possibile,possibilty,possiblility,possiblilty,possiblities,possiblity,possition,Postdam,posthomous,postion,postive,potatos,potrait,potrayed,poulations,poverful,poweful,powerfull,ppublisher,practial,practially,practicaly,practicioner,practicioners,practicly,practioner,practioners,prairy,prarie,praries,pratice,preample,precedessor,preceed,preceeded,preceeding,preceeds,precentage,precice,precisly,precurser,predecesors,predicatble,predicitons,predomiantly,prefered,prefering,preferrably,pregancies,preiod,preliferation,premeire,premeired,premillenial,preminence,premission,Premonasterians,preocupation,prepair,prepartion,prepatory,preperation,preperations,preriod,presedential,presense,presidenital,presidental,presitgious,prespective,prestigeous,prestigous,presumabely,presumibly,pretection,prevelant,preverse,previvous,pricipal,priciple,priestood,primarly,primative,primatively,primatives,primordal,principlaity,principaly,principial,principly,prinicipal,privalege,privaleges,priveledges,privelege,priveleged,priveleges,privelige,priveliged,priveliges,privelleges,privilage,priviledge,priviledges,privledge,privte,probabilaty,probablistic,probablly,probalibity,probaly,probelm,proccess,proccessing,procede,proceded,procedes,procedger,proceding,procedings,proceedure,proces,processer,proclaimation,proclamed,proclaming,proclomation,profesion,profesor,professer,proffesed,proffesion,proffesional,proffesor,profilic,progessed,programable,progrom,progroms,prohabition,prologomena,prominance,prominant,prominantly,prominately,promiscous,promotted,pronomial,pronouced,pronounched,pronounciation,proove,prooved,prophacy,propietary,propmted,propoganda,propogate,propogates,propogation,propostion,propotions,propper,propperly,proprietory,proseletyzing,protaganist,protaganists,protocal,protoganist,protrayed,protruberance,protruberances,prouncements,provacative,provded,provicial,provinicial,provisiosn,provisonal,proximty,pseudononymous,pseudonyn,psuedo,psycology,psyhic,pubilsher,pubisher,publiaher,publically,publicaly,publicher,publihser,publisehr,publiser,publisger,publisheed,publisherr,publishher,publishor,publishre,publissher,publlisher,publsiher,publusher,puchasing,Pucini,Puertorrican,Puertorricans,pulisher,pumkin,puplisher,puritannical,purposedly,purpotedly,pursuade,pursuaded,pursuades,pususading,puting,pwoer,pyscic,qtuie,quantaty,quantitiy,quarantaine,Queenland,questonable,quicklyu,quinessential,quitted,quizes,qutie,rabinnical,racaus,radiactive,radify,raelly,rarified,reaccurring,reacing,reacll,readmition,realitvely,realsitic,realtions,realy,realyl,reasearch,rebiulding,rebllions,rebounce,reccomend,reccomendations,reccomended,reccomending,reccommend,reccommended,reccommending,reccuring,receeded,receeding,receivedfrom,recepient,recepients,receving,rechargable,reched,recide,recided,recident,recidents,reciding,reciepents,reciept,recieve,recieved,reciever,recievers,recieves,recieving,recipiant,recipiants,recived,recivership,recogise,recogize,recomend,recomended,recomending,recomends,recommedations,recompence,reconaissance,reconcilation,reconized,reconnaisance,reconnaissence,recontructed,recordproducer,recquired,recrational,recrod,recuiting,recuring,recurrance,rediculous,reedeming,reenforced,refect,refedendum,referal,referece,refereces,refered,referemce,referemces,referencs,referenece,refereneced,refereneces,referiang,refering,refernce,refernce,refernces,referrence,referrences,referrs,reffered,refference,reffering,refrence,refrences,refrers,refridgeration,refridgerator,refromist,refusla,regardes,regluar,reguarly,regulaion,regulaotrs,regularily,rehersal,reicarnation,reigining,reknown,reknowned,rela,relaly,relatiopnship,relativly,relected,releive,releived,releiver,releses,relevence,relevent,reliablity,relient,religeous,religous,religously,relinqushment,relitavely,relized,relpacement,remaing,remeber,rememberable,rememberance,remembrence,remenant,remenicent,reminent,reminescent,reminscent,reminsicent,rendevous,rendezous,renedered,renewl,rennovate,rennovated,rennovating,rennovation,rentors,reoccurrence,reorganision,repatition,repblic,repblican,repblicans,repblics,repectively,repeition,repentence,repentent,repeteadly,repetion,repid,reponse,reponsible,reportadly,represantative,representive,representives,reproducable,reprtoire,repsectively,reptition,repubic,repubican,repubicans,repubics,republi,republian,republians,republis,repulic,repulican,repulicans,repulics,requirment,requred,resaurant,resembelance,resembes,resemblence,resevoir,residental,resignement,resistable,resistence,resistent,respectivly,responce,responibilities,responisble,responnsibilty,responsability,responsibile,responsibilites,responsiblities,responsiblity,ressemblance,ressemble,ressembled,ressemblence,ressembling,resssurecting,ressurect,ressurected,ressurection,ressurrection,restarant,restarants,restaraunt,restaraunteur,restaraunteurs,restaraunts,restauranteurs,restauration,restauraunt,resteraunt,resteraunts,resticted,restraunt,resturant,resturants,resturaunt,resturaunts,resurecting,retalitated,retalitation,retreive,returnd,revaluated,reveiw,reveral,reversable,revolutionar,rewitten,rewriet,rference,rferences,rhymme,rhythem,rhythim,rhytmic,rigeur,rigourous,rininging,rised,Rockerfeller,rococco,rocord,roomate,rougly,rucuperate,rudimentatry,rulle,runing,runnung,russina,Russion,rwite,rythem,rythim,rythm,rythmic,rythyms,sacrafice,sacreligious,sacrifical,saftey,safty,salery,sanctionning,sandwhich,Sanhedrim,santioned,sargant,sargeant,sasy,satelite,satelites,Saterday,Saterdays,satisfactority,satric,satrical,satrically,sattelite,sattelites,saught,saveing,saxaphone,scaleable,scandanavia,scaricity,scavanged,schedual,scholarhip,scholarstic,scientfic,scientifc,scientis,scince,scinece,scirpt,scoll,screenwrighter,scrutinity,scuptures,seach,seached,seaches,secceeded,seceed,seceeded,secratary,secretery,sedereal,seeked,segementation,seguoys,seige,seing,seinor,seldomly,senarios,sence,senstive,sensure,seperate,seperated,seperately,seperates,seperating,seperation,seperatism,seperatist,sepina,sepulchure,sepulcre,sergent,settelement,settlment,severeal,severley,severly,sevice,shadasloo,shaddow,shadoloo,shamen,sheat,sheild,sherif,shineing,shiped,shiping,shopkeeepers,shorly,shortwhile,shoudl,shoudln,shouldnt,shreak,shrinked,sicne,sideral,sieze,siezed,siezing,siezure,siezures,siginificant,signficant,signficiant,signfies,signifantly,significently,signifigant,signifigantly,signitories,signitory,similarily,similiar,similiarity,similiarly,simmilar,simpley,simplier,simultanous,simultanously,sincerley,singsog,sinse,Sionist,Sionists,Sixtin,Skagerak,skateing,slaugterhouses,slighly,slippy,slowy,smae,smealting,smoe,sneeks,snese,socalism,socities,soem,sofware,sohw,soilders,solatary,soley,soliders,soliliquy,soluable,somene,somtimes,somwhere,sophicated,sophmore,sorceror,sorrounding,sotry,sotyr,soudn,soudns,sould,sountrack,sourth,sourthern,souvenier,souveniers,soveits,sovereignity,soverign,soverignity,soverignty,spainish,speach,specfic,speciallized,specif,specifiying,speciman,spectauclar,spectaulars,spects,spectum,speices,spendour,spermatozoan,spoace,sponser,sponsered,spontanous,sponzored,spoonfulls,sppeches,spreaded,sprech,spred,spriritual,spritual,sqaure,stablility,stainlees,staion,standars,stange,startegic,startegies,startegy,stateman,statememts,statment,steriods,sterotypes,stilus,stingent,stiring,stirrs,stlye,stomache,stong,stopry,storeis,storise,stornegst,stoyr,stpo,stradegies,stradegy,strat,stratagically,streemlining,stregth,strenghen,strenghened,strenghening,strenght,strenghten,strenghtened,strenghtening,strengtened,strenous,strictist,strikely,strnad,stroy,structual,stubborness,stucture,stuctured,studdy,studing,stuggling,sturcture,subcatagories,subcatagory,subconsiously,subjudgation,submachne,subpecies,subsidary,subsiduary,subsquent,subsquently,substace,substancial,substatial,substituded,substract,substracted,substracting,substraction,substracts,subtances,subterranian,suburburban,succceeded,succcesses,succedded,succeded,succeds,succesful,succesfully,succesfuly,succesion,succesive,successfull,successully,succsess,succsessfull,suceed,suceeded,suceeding,suceeds,sucesful,sucesfully,sucesfuly,sucesion,sucess,sucesses,sucessful,sucessfull,sucessfully,sucessfuly,sucession,sucessive,sucessor,sucessot,sucide,sucidial,sufferage,sufferred,sufferring,sufficent,sufficently,sumary,sunglases,suop,superceeded,superintendant,suphisticated,suplimented,supose,suposed,suposedly,suposes,suposing,supplamented,suppliementing,suppoed,supposingly,suppy,supress,supressed,supresses,supressing,suprise,suprised,suprising,suprisingly,suprize,suprized,suprizing,suprizingly,surfce,surley,suround,surounded,surounding,suroundings,surounds,surplanted,surpress,surpressed,surprize,surprized,surprizing,surprizingly,surrended,surrepetitious,surrepetitiously,surreptious,surreptiously,surronded,surrouded,surrouding,surrundering,surveilence,surveill,surveyer,surviver,survivers,survivied,suseptable,suseptible,suspention,swaer,swaers,swepth,swiming,syas,symetrical,symetrically,symetry,symettric,symmetral,symmetricaly,synagouge,syncronization,synonomous,synonymns,synphony,syphyllis,sypmtoms,syrap,sysmatically,sytem,sytle,tabacco,tahn,taht,talekd,targetted,targetting,tast,tath,tattooes,taxanomic,taxanomy,teached,techician,techicians,techiniques,technitian,technnology,technolgy,teh,tehy,telelevision,televsion,telphony,temerature,tempalte,tempaltes,temparate,temperarily,temperment,tempertaure,temperture,temprary,tenacle,tenacles,tendacy,tendancies,tendancy,tennisplayer,tepmorarily,terrestial,terriories,terriory,territorist,territoy,terroist,testiclular,tghe,thast,theather,theese,theif,theives,themselfs,themslves,ther,therafter,therby,theri,theyre,thgat,thge,thier,thign,thigns,thigsn,thikn,thikning,thikns,thiunk,thn,thna,thne,thnig,thnigs,thoughout,threatend,threatning,threee,threshhold,thrid,throrough,throughly,throught,througout,thru,thsi,thsoe,thta,thyat,tiem,tihkn,tihs,timne,tiome,tje,tjhe,tjpanishad,tkae,tkaes,tkaing,tlaking,tobbaco,todays,todya,toghether,toke,tolerence,Tolkein,tomatos,tommorow,tommorrow,tongiht,toriodal,tormenters,tornadoe,torpeados,torpedos,tothe,toubles,tounge,tourch,towords,towrad,tradionally,traditionaly,traditionnal,traditition,tradtionally,trafficed,trafficing,trafic,trancendent,trancending,tranform,tranformed,transcendance,transcendant,transcendentational,transcripting,transending,transesxuals,transfered,transfering,transformaton,transistion,translater,translaters,transmissable,transporation,tremelo,tremelos,triguered,triology,troling,troup,troups,truely,trustworthyness,turnk,Tuscon,tust,twelth,twon,twpo,tyhat,tyhe,typcial,typicaly,tyranies,tyrany,tyrranies,tyrrany,ubiquitious,ublisher,uise,Ukranian,ultimely,unacompanied,unahppy,unanymous,unathorised,unavailible,unballance,unbeknowst,unbeleivable,uncertainity,unchallengable,unchangable,uncompetive,unconcious,unconciousness,unconfortability,uncontitutional,unconvential,undecideable,understoon,undesireable,undetecable,undoubtely,undreground,uneccesary,unecessary,unequalities,unforetunately,unforgetable,unforgiveable,unfortunatley,unfortunatly,unfourtunately,unihabited,unilateraly,unilatreal,unilatreally,uninterruped,uninterupted,UnitesStates,univeral,univeristies,univeristy,univerity,universtiy,univesities,univesity,unkown,unlikey,unmanouverable,unmistakeably,unneccesarily,unneccesary,unneccessarily,unneccessary,unnecesarily,unnecesary,unoffical,unoperational,unoticeable,unplease,unplesant,unprecendented,unprecidented,unrepentent,unrepetant,unrepetent,unsed,unsubstanciated,unsuccesful,unsuccesfully,unsuccessfull,unsucesful,unsucesfuly,unsucessful,unsucessfull,unsucessfully,unsuprised,unsuprising,unsuprisingly,unsuprized,unsuprizing,unsuprizingly,unsurprized,unsurprizing,unsurprizingly,untill,untranslateable,unuseable,unusuable,unviersity,unwarrented,unweildly,unwieldly,upcomming,upgradded,upto,usally,useage,usefull,usefuly,useing,usualy,ususally,vaccum,vaccume,vacinity,vaguaries,vaieties,vailidty,valetta,valuble,valueable,varations,varient,variey,varing,varities,varity,vasall,vasalls,vegatarian,vegitable,vegitables,vegtable,vehicule,vell,venemous,vengance,vengence,verfication,verison,verisons,vermillion,versitilaty,versitlity,vetween,veyr,vigeur,vigilence,vigourous,villian,villification,villify,villin,vincinity,violentce,virtualy,virutal,virutally,visable,visably,visting,vistors,vitories,volcanoe,voleyball,volontary,volonteer,volonteered,volonteering,volonteers,volounteer,volounteered,volounteering,volounteers,volumne,vreity,vrey,vriety,vulnerablility,vyer,vyre,waht,wanna,warantee,wardobe,warrent,warrriors,wasnt,wass,watn,wayword,weaponary,weas,wehn,weild,weilded,wendsay,wensday,wereabouts,whant,whants,whcih,wheras,wherease,whereever,whic,whihc,whith,whlch,whn,wholey,wholy,whta,whther,wich,widesread,wief,wierd,wiew,wih,wiht,wille,willk,willingless,wirting,withdrawl,witheld,withh,withing,withold,witht,witn,wiull,wnat,wnated,wnats,wohle,wokr,wokring,wonderfull,wordlwide,workststion,worls,worstened,woudl,wresters,wriet,writen,wroet,wrok,wroking,wtih,wupport,xenophoby,yaching,yaer,yaerly,yaers,yatch,yearm,yeasr,yeild,yeilding,Yementite,yera,yrea,yeras,yersa,yotube,youseff,youself,ytou,yuo,zeebra",
	homonym: "where,accept,affect,bare,bear,boar,bore,brake,break,complement,compliment,dear,deer,effect,except,fair,fare,flair,flare,flea,flee,hair,hare,heal,hear,heel,here,hour,our,it's,its,knew,land,lend,lieu,loo,mail,male,mantle,mantel,meat,meet,new,plain,plane,real,reel,son,sun,than,then,their,then,there,they're,to ,toll,too,two,wear,were,where,you're,your,halve,half,weather,whether,strait,straight,oar, or,nose,knows,weigh,way,rite,right,four,fore,steak,stake,knot, not,sea,see",
	weakword: "a bit,a little,actually,really,very,almost,seem,seems,pretty,pretty,probably,frankly,nice,suddenly,truth be known,I couldn't help but,blurt,set in,possession of,productive of,question as to,there is no doubt,the fact that",
	saidwords: "lilted,sang out,in a sad way,agonized,bawled,blubbered,lamented,sobbed,groaned,sniveled,wept,jerked out,mourned,in a bossy way,insisted,bossed,demanded,preached,dictated,professed,ordered,in an angry way,raged,seethed,fumed,retorted,thundered,blurted,in a pained way,barked,cried out,cried,screamed,jabbered,bellowed,groaned,howled,shrieked,roared,grieved,wailed,yelped,in a frightened way,stammered,shuddered,quivered,trembled,in an understanding way,empathized,accepted,consoled,crooned,cajoled,comforted,sympathized,agreed,in a tired way,mumbled,struggled,emitted,wearied,in a begging way,beseeched,begged,implored,pleaded,entreated,appealed to,as an answer,responded,retorted,replied,rejoined,answered,acknowledged,accused,acquiesced,admitted,admonished,he advised,advocated,he affirmed,he alleged,he announced,answered,apologized,approved,argued,articulated,assented,asserted,assumed,assured,attacked,attested,averred,avowed,babbled,balked,bargained,bantered,barked,bawled,beckoned,began,begged,bellowed,blabbed,blasted,blubbered,blurted,boasted,boomed,bragged,brayed,breathed,bubbled",
	preposition: "aboard,about,above,absent,across,after,against,along,alongside,amid,amidst,among,amongst,around,as,aside,astride,at,athwart,atop,barring,before,behind,below,beneath,beside,besides,between,betwixt,beyond,but,by,circa,concerning,despite,down,during,except,excluding,failing,following,for,from,given,in,including,inside,into,like,minus,near,next,notwithstanding,of,off,on,onto,opposite,out,outside,over,pace,passim,past,plus,round,sans,save,since,than,through,throughout,till,times,to,toward,towards,under,underneath,unlike,until,up,upon,with,within,without,worth",
	cliche: "a chip off the old block,a clean slate,a dark and stormy night,a far cry,a fine kettle of fish,a kind soul,a good soul,a loose cannon,a pain in the butt,a pain in the neck,a penny saved is a penny earned,a tough row to hoe,a word to the wise,ace in the hole,ace up his sleeve,add insult to injury,afraid of his own shadow,against all odds,air your dirty laundry,all fun and games,all in a day's work,all talk,all thumbs,all your eggs in one basket,all's fair in love and war,all's well that ends well,almighty dollar,American as apple pie,an axe to grind,armed to the teeth,as luck would have it,as old as time,as the crow flies,at my wits end,avoid like the plague,babe in the woods,back against the wall,back in the saddle,back to square one,back to the drawing board,bad to the bone,badge of honor,bald faced liar,banging your head against a brick wall,ballpark figure,baptism by fire,bark is worse than her bite,barking up the wrong tree,bat out of hell,be all and end all,beat a dead horse,beat around the bush,bee in her bonnet,beggars can't be choosers,behind the eight ball,bend over backwards,benefit of the doubt,bent out of shape,best thing since sliced bread,bet your bottom dollar,better half,better late than never,better mousetrap,better safe than sorry,between a rock and a hard place,beyond the pale,bide your time,big as life,big fish in a small pond,big cheese,big man on campus,bigger they are the harder they fall,bird in the hand,birds and the bees,bird's eye view,birds of a feather flock together,bite the bullet,bite the dust,bit the hand that feeds you,bitten off more than he can chew,black as coal,black as pitch,black as the ace of spades,blast from the past,bleeding heart,blessing in disguise,blind ambition,blind as a bat,blind leading the blind,blood is thicker than water,blood sweat and tears,blow off steam,blow your own horn,blushing bride,boils down to,bone to pick,bored to tears,bored stiff,bottomless pit,boys will be boys,bright and early,brings home the bacon,broad across the beam,broken record,bull by the horns,bull in a china shop,burn the midnight oil,burning the candle at both ends,burning question,burst your bubble,bury the hatchet,busy as a bee,by hook or by crook,call a spade a spade,called onto the carpet,calm before the storm,can of worms,can't cut the mustard,can't hold a candle to,case of mistaken identity,cat got your tongue,caught in the crossfire,caught red-handed,caught with her pants down,caught with his pants down,caught with their pants down,caught with your pants down,checkered past,chip on her shoulder,chip on her shoulder,chip on your shoulder,chip on their shoulder,chomping at the bit,cleanliness is next to godliness,clear as a bell,clear as mud,close to the vest,cock and bull story,cold shoulder,come hell or high water,cost a king's ransom,an arm and a leg,count your blessings,crack of dawn,crash course,creature comforts,cross that bridge when you come to it,cry her eyes out,cry like a baby,cry me a river,crystal clear,curiosity killed the cat,cut and dried,cut through the red tape,cut to the chase,cute as a bugs ear,cute as a button,cute as a puppy,cuts to the quick,dark before the dawn,dead as a doornail,devil is in the details,dime a dozen,divide and conquer,dog and pony show,dog days,dog eat dog,dog tired,don't burn your bridges,chickens before they're hatched,don't look a gift horse in the mouth,don't rock the boat,don't step on anyone's toes,don't take any wooden nickels,down and out,down at the heels,down in the dumps,down on her luck,down on his luck,down on your luck,down on their luck,down the hatch,down to earth,draw the line,dressed to kill,dressed to the nines,drives me up the wall,dull as dishwater,dyed in the wool,eagle eye,easy as pie,eat your heart out,eat your words,enough to piss off the Pope,ear to the ground,early bird catches the worm,earn her keep,earn his keep,earn my keep,earn your keep,earn their keep,easier said than done,easy as 1-2-3,easy as pie,eleventh hour,even the playing field,every dog has its day,every fiber of my being,everything but the kitchen sink,eye for an eye,eyes in the back of her head,facts of life,fair weather friend,fan the flames,fair weather friend,fall by the wayside,feast or famine,feather in his cap,feather your nest,few and far between,fifteen minutes of fame,filthy vermin,fine kettle of fish,fish out of water,fishing for a compliment,fit as a fiddle,fit the bill,fit to be tied,flat as a pancake,flip your lid,flog a dead horse,fly by night,fly the coop,follow your heart,for all intents and purposes,for the birds,for what it's worth,force of nature,force to be reckoned with,forgive and forget,fox in the henhouse,free and easy,free as a bird,fresh as a daisy,full steam ahead,fun in the sun,get a kick out of,get a leg up,get down and dirty,get his back up,get my back up,get her back up,get the lead out,get to the bottom of,get your feet wet,gets my goat,gilding the lily,give and take,go against the grain,go for broke,go him one better,go the extra mile,go with the flow,goes without saying,good as gold,good deed for the day,good things come to those who wait,good time was had by all,greek to me,green thumb,green-eyed monster,growing like a weed,grist for the mill,hair of the dog,hand to mouth,happy as a clam,hasn't a clue,have a nice day,have high hopes,haven't got a row to hoe,have the last laugh,head honcho,hear a pin drop,heard it through the grapevine,heart's content,hem and haw,high and dry,high and mighty,high as a kite,hit paydirt,hold your horses,hold your tongue,hold your head up high,hold your own,honest as the day is long,horse of a different color,hot under the collar,I beg to differ,icing on the cake,if the shoe fits,if the shoe were on the other foot,in a jam,in a jiffy,in a nutshell,in a pig's eye,in a pinch,in a word,in her element,in his element,in hot water,in over her head,in over his head,in over their head,in over your head,in over our head,in over my head,in the gutter,in the nick of time,in the thick of it,in this day and age,in your dreams,it ain't over till the fat lady sings,it goes without saying,it's a small world,it's only a matter of time,it takes all kinds,it takes one to know one,ivory tower,Jack of all trades,jockey for position,jog your memory,Johnny-come-lately,joined at the hip,judge a book by its cover,jump down your throat,jump in with both feet,jump on the bandwagon,jump the gun,jump to conclusions,just the ticket,justice is blind,keep a stiff upper lip,keep an eye on,keep the home fires burning,keep up with the Joneses,keep your chin up,keep your fingers crossed,kick the bucket,kick up your heels,kick your feet up,kid in a candy store,kill two birds with one stone,kick his lights out,kick the bucket,kiss of death,knock his block off,knock it out of the park,knock on wood,knock your socks off,know him from Adam,know the ropes,know the score,knuckle down,knuckle sandwich,knuckle under,labor of love,land on your feet,lap of luxury,last but not least,last-ditch effort,last hurrah,law of the jungle,law of the land,lay down the law,leaps and bounds,let sleeping dogs lie,letter perfect,let the cat out of the bag,let the good times roll,let your hair down,let's talk turkey,lick your wounds,lies like a rug,life's a bitch,life's a grind,light at the end of the tunnel,lighter than a feather,lighter than air,like clockwork,like father like son,like taking candy from a baby,like there's no tomorrow,lion's share,live and learn,live and let live,long and short of it,long lost love,look before you leap,look down your nose,look what the cat dragged in,looks like death warmed over,loose cannon,lose your head,lose your temper,loud as a horn,lounge lizard,loved and lost,low man on the totem pole,luck of the draw,luck of the Irish,make hay while the sun shines,make money hand over fist,make my day,make the best of a bad situation,make the best of it,make your blood boil,man of few words,man's best friend,mark my words,missed the boat on that one,moment in the sun,moment of glory,moment of truth,money to burn,more power to you,more than one way to skin a cat,movers and shakers,naked as a jaybird,naked truth,neat as a pin,needless to say,neither here nor there,never look back,never say never,nip and tuck,nip it in the bud,no love lost,no skin off my back,no stone unturned,no time like the present,no use crying over spilled milk,nose to the grindstone,not a hope in hell,not a minute's peace,not playing with a full deck,not the end of the world,not in my backyard,not written in stone,nothing to sneeze at,nothing ventured nothing gained,now we're cooking,off the top of my head,off the wagon,off the wall,older and wiser,older than dirt,older than Methuselah,old hat,on a roll,on cloud nine,on your high horse,on her high horse,on his high horse,on pins and needles,on the bandwagon,on the money,on the nose,on the rocks,on the spot,on the tip of my tongue,on the wagon,on thin ice,one bad apple doesn't spoil the bushel,one born every minute,one brick short,one foot in the grave,one in a million,one red cent,only game in town,open a can of worms,open the flood gates,opportunity doesn't knock twice,over the hump,out of pocket,out of the frying pan into the fire,out of the woods,out on a limb,over a barrel,pain and suffering,panic button,par for the course,part and parcel,party pooper,pass the buck,patience is a virtue,pay through the nose,penny pincher,perfect storm,pig in a poke,pile it on,pillar of the community,pin your hopes on,pitter patter of little feet,plain as day,plain as the nose on your face,play by the rules,play your cards right,playing the field,playing with fire,pleased as punch,plenty of fish in the sea,poor as a church mouse,pot calling the kettle black,pull a fast one,pull your punches,pulled the wool over,pulling your leg,pure as the driven snow,put one over on you,put the pedal to the metal,put the cart before the horse,put your best foot forward,put your foot down,quick as a bunny,quick as a lick,quick as a wink,quick as lightning,quiet as a dormouse,rags to riches,raining buckets,raining cats and dogs,rank and file,reap what you sow,red as a beet,red herring,reinvent the wheel,rich and famous,rings a bell,ripped me off,rise and shine,road to hell is paved with good intentions,rob Peter to pay Paul,roll over in the grave,rub the wrong way,running in circles,salt of the earth,scared out of her wits,scared out of his wits,scared out of your wits,scared out of our wits,scared out of their wits,scared out of my wits,scared stiff,scared to death,sealed with a kiss,second to none,see eye to eye,seen the light,set the record straight,set your teeth on edge,sharp as a tack,shoot the breeze,shoot for the moon,shot in the dark,shoulder to the wheel,sick as a dog,sieze the day,sigh of relief,sink or swim,half a dozen of another,skating on thin ice,slept like a log,slinging mud,slippery as an eel,slow as molasses in January,smooth as a baby's bottom,snug as a bug in a rug,sow wild oats,spare the rod,spoil the child,speak of the devil,spilled the beans,spinning your wheels,spitting image of,spoke with relish,spring to life,stands out like a sore thumb,squeaky wheel gets the grease,start from scratch,stick in the mud,still waters run deep,stitch in time,stop and smell the roses,straw that broke the camel's back,strong as an ox,stubborn as a mule,stuff that dreams are made of,stuffed shirt,sweating blood,sweating bullets,take a load off,take one for the team,take the bait,take the bull by the horns,take the plunge,takes one to know one,takes two to tango,the more the merrier,the real deal,the real McCoy,the red carpet treatment,the same old story,there is no accounting for taste,thick as a brick,thick as thieves,think outside of the box,third time's the charm,this day and age,this hurts me worse than it hurts you,this point in time,three sheets to the wind,three strikes against,throw in the towel,tie one on,tighter than a drum,time and time again,time is of the essence,tip of the iceberg,to each his own,to the best of my knowledge,toe the line,tongue-in-cheek,too good to be true,too hot to handle,too numerous to mention,touch with a ten foot pole,tough as nails,trials and tribulations,tried and true,trip down memory lane,twist of fate,two cents worth,two peas in a pod,ugly as sin,under her thumb,under his thumb,under my thumb,under their thumb,under the counter,under the gun,under the same roof,until the cows come home,unvarnished truth,up his sleeve,up the creek,up to his ears in trouble,uphill battle,upper crust,upset the applecart,V for victory,vain attempt,vain effort,vanquish the enemy,vested interest,waiting for the other shoe to drop,wakeup call,warm welcome,watching the clock,watch your p's and q's,watch your tongue,water under the bridge,weather the storm,went belly up,wet behind the ears,weed them out,week of Sundays,what goes around comes around,what you see is what you get,when push comes to shove,when the cat's away,when the going gets tough,white as a sheet,whole ball of wax,whole hog,whole nine yards,wild goose chase,will wonders never cease?,wisdom of the ages,wolf at the door,words fail me,work like a dog,world weary,worst nightmare,wrong side of the bed,yanking your chain,yappy as a dog,years young,you are what you eat,but you can't hide,you only live once,young and foolish,young and vibrant,you're the boss, thought to myself, thought to himself, thought to herself",
	passive: "([^a-z])(was|is|were|will\s+be|am|has\s+been|are)(\\s)([^!.;,?]{0,15})?([a-z]+ing)([\\s.;!?;])",
	topwords: "afford",
	dialog: '(")([^\"]*)(")',
	//  passiveby: "([^a-z])(was|is|were|will\s+be|am|has\s+been|are)([^!.;?]+)?([a-z]+ed)([\\s.;!?;])",
	//  passive: "was [a-z]+ing",
	alot: "alot",
	past: "arisen,awoken,been,borne,beaten,beat,become,begun,bent,bet,bitten,bled,blown,broken,brought,built,burned,burnt,burst,bought,caught,chosen,clung,come,cost,crept,cut,dealt,dug,dived,done,drawn,dreamed,dreamt,drunk,driven,eaten,fallen,fed,felt,fought,found,fit,fitted,fled,flung,flown,forbidden,forbade,forgotten,forgiven,forgone,frozen,gotten,got,given,gone,ground,grown,hung,hanged,had,heard,hidden,hit,held,hurt,kept,knelt,kneeled,knitted,knit,known,laid,led,leapt,leaped,left,lent,let,lain,lit,lighted,lost,made,meant,met,paid,proved,proven,put,quit,read,ridden,rung,risen,run,sawed,sawn,said,seen,sought,sold,sent,set,sewn,sewed,shaken,shaved,shaven,sheared,shorn,shone,shined,shot,shown,showed,shrunk,shrunken,shut,sung,sunk,sat,slain,slept,slid,sneaked,snuck,spoken,sped,spent,spilled,spilt,spun,spat,spit,split,spread,sprung,stood,stolen,stuck,stung,stunk,strewn,struck,stricken,striven,strived,sworn,swept,swum,swung,taken,taught,torn,told,thought,thrived,thriven,thrown,undergone,understood,upset,woken,waked,worn,woven,wept,won,wound,withdrawn,wrung,written",
	present: "arise,awake,be,bear,beat,become,begin,bend,bet,bite,bleed,blow,break,bring,build,burn,burst,buy,catch,choose,cling,come,cost,creep,cut,deal,dig,dive,do,draw,dream,drink,drive,eat,fall,feed,feel,fight,find,fit,flee,fling,fly,forbid,forget,forgive,forgo,freeze,get,give,go,grind,grow,hang,have,hear,hide,hit,hold,hurt,keep,kneel,knit,know,lay,lead,leap,leave,lend,let,lie,(down),light,lose,make,mean,meet,pay,prove,put,quit,read,ride,ring,rise,run,saw,say,see,seek,sell,send,set,sew,shake,shave,shear,shine,shoot,show,shrink,shut,sing,sink,sit,slay,sleep,slide,sneak,speak,speed,spend,spill,spin,spit,split,spread,spring,stand,steal,stick,sting,stink,strew,strike,strive,swear,sweep,swim,swing,take,teach,tear,tell,think,thrive,throw,undergo,understand,upset,wake,wear,weave,weep,win,wind,withdraw,wring,write"
};

function countvalues(a) {
	var b = {},
		i = a.length,
		j;
	while (i--) {
		j = b[a[i]];
		b[a[i]] = j ? j + 1 : 1;
	}
	return b; // an object of element:count arrays
}

function sortByNumber(a, b) {
	var x = a.Number;
	var y = b.Number;
	return ((x < y) ? +1 : ((x > y) ? -1 : 0));
}

function word(wordElem, number) {
	this.WordElem = wordElem;
	this.Number = parseInt(parseFloat(number));
}

function countWords(text) {
	var regex = /\s+/gi;
	return text.trim().replace(regex, ' ').split(' ').length;
}

var topWordsSplit;

function liveEditNow(m) {
	var radioVal = m || $('[name="liveEditRadio"]:checked').val();
	switch (radioVal) {
		case 'adverbs':
			$("#inputbox").highlightTextarea('setOptions', {
				color: "#FFff00"
			});
			$("#inputbox").highlightTextarea('setWords', adverbs.split(','));
			break;
		case 'weakwords':
			$("#inputbox").highlightTextarea('setOptions', {
				color: "#FF3E80"
			});
			$("#inputbox").highlightTextarea('setWords', weakwords.split(','));
			break;
		case 'saidwords':
			$("#inputbox").highlightTextarea('setOptions', {
				color: "#FF3E80"
			});
			$("#inputbox").highlightTextarea('setWords', saidwords.split(','));
			break;
		case 'passive':
			$("#inputbox").highlightTextarea('setOptions', {
				color: "#FF62FE"
			});
			$("#inputbox").highlightTextarea('setWords', ["([^a-z])(was|is|were|will\s+be|am|has\s+been|are)(\\s)([^!.;,?]+)?([a-z]+ing)([\\s.;!?;])"]);
			//   color: "#FF62FE"
			break;
		case 'prepositions':
			$("#inputbox").highlightTextarea('setOptions', {
				color: "#CC99FF"
			});
			$("#inputbox").highlightTextarea('setWords', ["(aboard|about|above|absent|across|after|against|along|alongside|amid|amidst|among|amongst|around|as|aside|astride|at|athwart|atop|barring|before|behind|below|beneath|beside|besides|between|betwixt|beyond|but|by|circa|concerning|despite|down|during|except|excluding|failing|following|for|from|given|in|including|inside|into|like|minus|near|next|notwithstanding|of|off|on|onto|opposite|out|outside|over|pace|passim|past|plus|round|sans|save|since|than|through|throughout|till|times|to|toward|towards|under|underneath|unlike|until|up|upon|with|within|without|worth){1}(\.\?\!\")"]);
			break;
	}
}

function T(el, text) {
	Tipped.create(el, text, {
		skin: 'yellow'
	});
}

function toolTips() {

}
var rawText;

function listSentences(matchString) {
	var sentenceArray = [];
	var pattern = /(.+?([A-Z].)[\.|\?](?:['")\\\s]?)+?\s?)/igm,
		match;
	var ol = document.getElementById("sentenceList");
	$('#sentenceList').html('<li><h3>Sentences containing "' + matchString + '"</h3></li>');
	while ((match = pattern.exec(rawText)) !== null) {
		if (match.index === pattern.lastIndex) {
			pattern.lastIndex++;
		}

		if (match[0].indexOf(matchString) > -1) {
			var li = document.createElement("li");
			li.appendChild(document.createTextNode(match[0]));
			ol.appendChild(li);
		}

		//console.log(match[0]);
	}

}

function sentenceArray(text) {
	var sentenceArray = [];
	var pattern = /(.+?([A-Z].)[\.|\?](?:['")\\\s]?)+?\s?)/igm,
		match;
	var ol = document.getElementById("sentenceList");

	while ((match = pattern.exec(text)) !== null) {
		if (match.index === pattern.lastIndex) {
			pattern.lastIndex++;
		}
		sentenceArray.push(match[0]);
	}
	return sentenceArray;
}

function sortArrayByLength(arr, ascYN) {
	arr.sort(function(a, b) { // sort array by length of text
		if (ascYN) return a.length - b.length; // ASC -> a - b
		else return b.length - a.length; // DESC -> b - a
	});
}

function splitSentences(text, matchString) {
	var sentenceArray = [];
	var pattern = /(.+?([A-Z].)[\.|\?](?:['")\\\s]?)+?\s?)/igm,
		match;
	var ol = document.getElementById("sentenceList");
	while ((match = pattern.exec(text)) !== null) {
		if (match.index === pattern.lastIndex) {
			pattern.lastIndex++;
		}

		if (match[0].indexOf(matchString) > -1) {
			var li = document.createElement("li");
			li.appendChild(document.createTextNode(match[0]));
			ol.appendChild(li);
		}

		//console.log(match[0]);
	}

}


function makeTips(JSONfile, tipType, tipSkin, tipIcon) {
	var JSONdata = {};
	$.getJSON(JSONfile, function(data) {
		$.each(data[tipType], function(key, val) {
			$('#output').keywordHighlight({
				keyword: key,
				caseSensitive: 'false',
				highlightClass: tipType
			});
			JSONdata[key] = val;
		});
	}).done(function() {
		//console.dir(ambrose);
		$('.' + tipType).each(function() {
			var tipWord = $(this).text().toLowerCase();
			//console.log(tipWord);
			var dataSplit = JSONdata[tipWord].split("|");
			var tipTitle = dataSplit[0];
			var tipBody = dataSplit[1];
			//console.log(ambroseSplit)
			Tipped.create(this, "<div class='" + tipType + "tip tipDiv'><div class='" + tipType + "Title tipTitle'>" + tipTitle + "<img src='" + tipIcon + "' class='" + tipType + "Icon' width='48px'/></div><div class='" + tipType + "Body tipBody'>" + tipBody + "</div></div>", {
				skin: tipSkin,
				onShow: function(content, element) {
					//	console.log(Tipped.findElement(element).textContent);
				}
			});
		});
	});
}

function displayOutput() {
	$("#reportcard_out").show();
	//blastSentence();
	$('#explanationwrap').slideUp(function() {
		$("#output").show();
		$("#outputWrap").show();
		$('.loading').fadeOut();
		$('#submittext').val("Edit!");
		$(document.body).animate({
			'scrollTop': $('#scrollTo').offset().top
		}, 1000, function() {
			$("#legend").fadeIn();
		});
	});


}
/*

function blastSentence() {
	$("#output").blast({ 
	    delimiter: "sentence", // Set the delimiter type (see left)
	    search: false, // Perform a search *instead* of delimiting
	    tag: "span", // Set the wrapping element type (e.g. "div")
	    customClass: "sentence", // Add a custom class to wrappers
	    generateIndexID: false, // Add #customClass-i to wrappers
	    generateValueClass: false, // Add .blast-word-val to wrappers
	    stripHTMLTags: true // Strip HTML before blasting
	});
}
*/

function avgArray(array) {
	if ($.isArray(array) === false) {
		array = [].push(array);
	}
	var sum = 0;
	if (array.length > 1) {
		array.forEach(function(num) {
			sum += parseFloat(num) || 0;
		});
		var avg = Math.floor(sum / array.length);
		return avg;
	} else {
		return array;
	}
}

function showQuote() {
	$.get('quotes.txt', function(data) {
		var quotes = data.split("@");
		var idx = Math.floor(quotes.length * Math.random());
		$('.quotes').html(quotes[idx]);
	});
}

function placeholderNews() {
	$.get('news.txt', function(data) {
		$('#inputbox').attr("placeholder",data);
	});
	
}

var ambrose, help;
$(function() {
	$(document).ajaxStart(function() {
		
		timer = setTimeout(function() {
			$(".loading").show();
		}, 250);
	}).ajaxStop(function() {
		clearTimeout(timer);
		$(".loading").hide();
	});
	storage = $.localStorage;
	$('#radiobtns .row ul li a').on('click', function(e) {
		e.preventDefault();
		var catid = '#' + $(this).attr('id') + "-rdio";
		var checkedinput = $("input[name='category']:checked").val();
		if (checkedinput === undefined) {
			// if no input is defined then we set the button clicked first
			$(catid).prop('checked', true);
		} else {
			// otherwise unset everything and then set the clicked button
			$("input[name='category']").prop('checked', false);
			$(catid).prop('checked', true);
		}
		var newval = $("input[name='category']:checked").val();
		if ($(this).attr('id') == newval) {
			$('#radiovaltxt').html(newval);
		}
		if ($(this).hasClass('sel')) {
			// if already selected then we do nothing
		} else {
			$('#radiobtns .row ul li a').removeClass('sel');
			$(this).addClass('sel');
		}
	});
	showQuote();
	$('.quotes').click(function() {
		showQuote();
	});
	$(".doSwitch").button();
	$('.prefSwitch').each(function(index, value) {
		var switchPos = storage.get($(this).attr('id')) || undefined;
		$(this).switchButton({
			on_label: $(this).attr('title'),
			off_label: '',
			height: 15,
			width: 28,
			button_width: 15,
			checked: switchPos
		});
	});
	
	
	$('#enableTooltips').switchButton({
		on_label: 'Tooltips',
		off_label: '',
		height: 15,
		width: 28,
		button_width: 15

	});

	$('.liveEditLabel').click(function() {
		console.log(this.id);
		liveEditNow(this.id);
	});
	$('#inputbox').delayedChange().on('delayedchange', function() {
		//liveEditNow();
		//console.log("I'm attached to the 'delayedchange' event for this element.");
	});
	// THIS IS A WORKING VERSION WITH PASSIVE ING SEARCH

	help = {
		adverb: "The Adverbinator will seek out adverbs for destruction. It uses a curated list of pernicious adverbs. If you see one that shouldn't be there, let me know.",
		commonly: "This will search your text for Wikipedia's list of over 4000 commonly misspelled words. It's likely that your word processor will catch these so it's unchecked by default.",
		homonym: "This will search for frequently confused homonyms, from accept/except to weather/whether as well as the ever-popular your/you're.",
		weakword: "This will find words that are often found in weak or stilted prose. It's meant to point out over-use, some of these words will naturally occur. TODO: Find these words only outside dialogue.",
		saidwords: "This will find examples of dialogue attribution where you should have used \"he said\" or \"she said\", it will also find the same sort of words outside of dialog attribution.",
		cliche: "This will point out where someone else has been secretly adding cliches to your work. Because you'd never do that.",
		//  nutsbolts: "Finds basic technical issues like double-spacing after periods and super long sentences.",
		preposition: "Highlights sentences ending with a preposition. A preposition is something you should not end a sentence with.",
		passive: "Check this to look for instances of the passive voice. Works in a limited way, catches \"(to be verb) ... (gerund)\". You'll get it once you use it.",
		topwords: "Enables the highlighting of frequently used words so you can see if you use that word too much. Frequently used words will be colored reddish-brown.",
		ambrose: "Ambrose Bierce's writing tips from his 1909 book Write It Right. MIGHT CRASH TAB",
		greek: "Shows words with Greek roots. Gives you some idea where the words you're using come from.",
		latin: "Shows words with Latin roots. Gives you some idea where the words you're using come from.",
		german: "Shows words with Germanic origin. Gives you some idea where the words you're using come from.",
		dialog: "Highlights dialog. Helpful for checking if you have any unclosed quotations."
	};
	for (var prop in help) {
		Tipped.create('#' + prop + '-tip', help[prop], {
			skin: 'white'
		});
	}


	/*
   $('#hashtag').data('help', "This will put descriptive #hashtags after found words. Useful for searching through text, or if you're colorblind.");
    $('#reportcard').data('help', "This will generate a report card result of your words, silently judging you, hoping you fail. Not really. Just some things that are nice to know.");
*/

	// TO DO: Sentence-level finding, average sentence length, longest sentence, comma density double space after sentences

	// Convert each into an array
	for (var key in wordArray) {
		wordArray[key] = wordArray[key].split(/,/);
	}

	// Lock in the current height
	var explain = $('#explain');
	explain.height(explain.height() + 'px');

	// Copy help text into the appropriate elements as data elements
	for (var key in help) {
		$('#check_' + key).data('help', help[key]);
	}

	// Set up a general hover handler
	var original_explain = explain.html();
	$('label').hover(function(e) {
		explain.text($('#' + this.getAttribute('for')).data('help'));
	}, function() {
		explain.html(original_explain);
	});

	$('#cleartext').click(function() {
		$("textarea#inputbox").val("");
	});

	$('#tryme').click(function() {
		var book = ["text/WarOfTheWorlds.txt", "text/AroundTheWorldIn80Days.txt", "text/AliceInWonderland.txt"];
		$("#inputbox").trigger('change');
		$.ajax({
			url: new Chance().pick(book),
			success: function(data) {
				var randomChapter = data.split("||");
				$("#inputbox").val(new Chance().pick(randomChapter));
			}
		});
	});
	$("#inputbox").on('focus keyup change', function() {
		$("#inputbox").css("background-image", "none");
	});
	placeholderNews();
	$('#submittext').click(function() {
		$('#submittext').val("Editing.");
		$('.loading').fadeIn();
		setTimeout(function() {
			editMinion();
		}, 500);

	});

	function editMinion() {

		// See what we're matching
		var todo = ['alot'];
		var switchesOff = [];
		for (var key in help) {
			if ($('#check_' + key).is(':checked')){
				todo.push(key);
				$("#" + key + "Legend").css("display", "inline");
				storage.set('check_' + key,true);
			}  else {
				switchesOff.push(key);
				$("#" + key + "Legend").css("display", "none");
				storage.set('check_' + key,false);
			}
		}
		
		// Prepare a word hash, and a regex hash
		var regex_hash = {};

		frequentWords();
		//        alert(topWordsSplit);
		wordArray.topwords = topWordsSplit.slice(0, -1);

		for (var j = 0; j < todo.length; ++j) {
			var key = todo[j];
			var suffix = (key == 'preposition') ? '[\.\?\!\"]' : '[^a-z]';
			if (key == 'passive' || key == 'dialog' || key == 'past') {
				regex_hash[key] = new RegExp(wordArray[key], 'ig');
				//   } else if (key == 'topwords') {
				//   	alert(match[key].slice(0, -1));
			} else if (key == 'present') {
				regex_hash[key] = new RegExp('([^a-z])(' + wordArray[key].join('|') + ')(s)?', 'ig');
			} else {
				//console.log(key); 
				regex_hash[key] = new RegExp('([^a-z])(' + wordArray[key].join('|') + ')(' + suffix + ')', 'ig');

			}
		}

		// Get the input text
		var text = $('#inputbox').val();


		// HTMLify, padding it with spaces
		//        {
		var e = document.createElement('div');
		e.appendChild(document.createTextNode(' '));
		e.appendChild(document.createTextNode(text));
		e.appendChild(document.createTextNode(' '));
		text = e.innerHTML;
		//        }
		rawText = text;
		// Replace newlines
		text = text.replace(/\n\n/g, ' </p><p class="paragraph"> ');
		text = text.replace(/\n/g, ' <br> ');

		// Replace all the regexes
		for (var key in regex_hash) {
			var regex = regex_hash[key];
			if (key == 'passive') {
				text = text.replace(regex, "$1<span class='" + key + "' title='" + key + "'>$2$3$4$5</span>$6");
			} else {
				text = text.replace(regex, "$1<span class='" + key + "' title='" + key + "'>$2</span>$3");
			}

		}

		// Output!
		var output = $('#output');
		output[0].innerHTML = text;

		function jsonTips(jsonFile,name) {
			var items = [];
			var jsonObj = {};
			$.getJSON(jsonFile, function(data) {
				$.each(data.word, function(key, val) {
					$('#output').keywordHighlight({
						keyword: key,
						caseSensitive: 'false',
						highlightClass: name
					});
					items.push(key);
					//   console.log(key);
					jsonObj[key] = val;
				});
			}).done(function() {
				$('.'+name).each(function() {
					var tipWord = $(this).text().toLowerCase();
					var descriptionSplit = jsonObj[tipWord].split("|");
					var descriptionTitle = descriptionSplit[0];
					var descriptionBody = descriptionSplit.slice(1);
					if (descriptionBody.length > 1) {
						Tipped.create(this, "<div class='"+name+"Tip'><img src='"+name+"Icon.png' class='"+name+"Icon' width='48px'/><div class='"+name+"Title'>" + descriptionTitle + "</div><div class='"+name+"Body'>" + descriptionBody + "</div></div>", {
							skin: 'gray',
							onShow: function(content, element) {
								//console.log(Tipped.findElement(element).textContent);
							}
						});
					} else {
						Tipped.create(this, "<div class='"+name+"Tip'><img src='"+name+"Icon.png' class='"+name+"Icon' width='48px'/><div class='"+name+"Title'>" + descriptionTitle + "</div></div>", {
							skin: 'gray',
							onShow: function(content, element) {
								//console.log(Tipped.findElement(element).textContent);
							}
						});
					}
					//console.log(ambroseSplit)
					
				});

			});
		}

		output.find('.alot').append('<div class="alot_img"><a href="http://hyperboleandahalf.blogspot.com/2010/04/alot-is-better-than-you-at-everything.html" target="_blank"><img src="img/ALOT.png" width="100"></a></div>');
		if ($('#shakespeare').is(':checked')){
			jsonTips('words/shakespeare.js','shakespeare');
		}
		if ($('#ambrose').is(':checked')) {
			$('.loading').show(function() {
				//makeTips("writeItRight.js","ambrose","yellow","ambroseIcon.png");
				var items = [];
				ambrose = {};
				$.getJSON("writeItRight.js", function(data) {
					$.each(data.ambrose, function(key, val) {
						$('#output').keywordHighlight({
							keyword: key,
							caseSensitive: 'false',
							highlightClass: 'ambrose'
						});
						items.push(key);
						ambrose[key] = val;
					});
				}).done(function() {
					$('.ambrose').each(function() {
						var tipWord = $(this).text().toLowerCase();
						var ambroseSplit = ambrose[tipWord].split("|");
						var ambroseTitle = ambroseSplit[0];
						var ambroseBody = ambroseSplit.slice(1);
						Tipped.create(this, "<div class='ambroseTip'><img src='ambroseIcon.png' class='ambroseIcon' width='48px'/><div class='ambroseTitle'>" + ambroseTitle + "</div><div class='ambroseBody'>" + ambroseBody + "</div></div>", {
							skin: 'gray',
							onShow: function(content, element) {
								console.log(Tipped.findElement(element).textContent);
							}
						});
					});

				});
			});
			$('.loading').fadeOut();
		}

		function sortByLengthDesc(a, b) {
			if (a.length > b.length)
				return -1;
			if (a.length < b.length)
				return 1;
			return 0;
		}
		var averageSentenceLength = [];
		var sentences = sentenceArray(rawText);
		var sortedSentences = sentenceArray(rawText).sort(sortByLengthDesc);
		var sentenceLengthArray = [];
		$('#longestSentence_text').html(sortedSentences[0]).hide();
		$('#sentenceList').hide();
		$('#longest').click(function() {
			$('#sentenceList').html('<li><h3>10 Longest Sentences</h3></li>');
			for (var sentence in sortedSentences) {
				if (sentence > 9) {
					$('#sentenceList').fadeIn();
					$('#longestClose').click(function() {
						$('#sentenceList').hide();
					});
					return;
				} else {
					$('#sentenceList').append('<li><span class="sentenceCount">' + countWords(sortedSentences[sentence]) + ' words.</span>' + sortedSentences[sentence] + '</li>');

				}

			}
		});
		for (var sentence in sentences) {
			sentenceLengthArray.push(countWords(sentences[sentence]));
		}
		averageSentenceLength = avgArray(sentenceLengthArray);
		//console.log(averageSentenceLength, sentenceLengthArray);

		$('#longestSentence_label').html('Longest Sentence: ' + countWords(sortedSentences[0]) + ' words.').click(function() {
			$('#longestSentence_text').slideToggle();
		});
		$('#averageSentence_label').html('Average Sentence: ' + averageSentenceLength + ' words.');
		displayOutput();

		if ($('#enableTooltips').is(':checked')) {
			T('.passive', 'Passive verbs are things that are not necessarily always bad.');
			T('.weakword', 'Weak word. Could possibly be stronger.');
			T('.homonym', 'Homonym. Make sure you\'ve used the right spelling.');
			T('.preposition', 'Ends with preposition');
			//	T('.adverb','Adverb' + $(this).val());

			$('.adverb').each(function() {
				var tipWord = $(this).text();
				Tipped.create(this, /* tipWord +  */ 'Adverb', {
					skin: 'yellow',
					onShow: function(content, element) {
						console.log(Tipped.findElement(element).textContent);
					}
				});
			});


			T('.saidwords', '"Said" Replacements');
			T('.greek', 'Greek origin');
			T('.latin', 'Latin origin');
			T('.german', 'Germanic origin');
		}
		var totalfound = 0;
		// Make some counts
		$('.count').text('');
		var countHash = {};
		for (var key in regex_hash) {
			$('.' + key + ' .count').text(': ' + output.find('.' + key).length);
			countHash[key] = output.find('.' + key).length;
		}
		$('.count').show();
		$('#sentenceGraph').sparkline(sentenceLengthArray);
		if (true) {

			var wordcount = $('#inputbox').val().split(/\b[\s!?,;:']/).length;
			$('#wordcount').text(wordcount);
			//	  var adverb_ratio = (countHash["adverb"]/wordcount)*1000;
			//	  var adverb_percent = "0% " + ((adverb_ratio/12)*100).toFixed(0).toString() + '%';
			//	  alert(percFromRatio(countHash["adverb"],wordcount,13));
			console.log(countHash);
			$('#adverbGrade').css("backgroundPosition", percFromRatio(countHash.adverb, wordcount, 15));
			$('#adverbLabel').html(countHash.adverb + " Adverbs");
			$('#weakGrade').css("backgroundPosition", percFromRatio(countHash.weak, wordcount, 13));
			$('#weakLabel').html(countHash.weakword + " weak words");
			$('#passiveGrade').css("backgroundPosition", percFromRatio(countHash.passive, wordcount, 10));
			$('#passiveLabel').html(countHash.passive + " passive words");
			$('#saidGrade').css("backgroundPosition", percFromRatio(countHash.saidwords, wordcount, 13));
			$('#saidLabel').html(countHash.saidwords + " 'said' alternatives");
			$('#prepositionGrade').css("backgroundPosition", percFromRatio(countHash.preposition, wordcount, 8));
			$('#prepositionLabel').html(countHash.saidwords + " end with preposition");
			//  $('#ratio').html((100 - (2*((totalfound/wordcount).toFixed(4) * 1000))).toFixed(1));
			$('#presentLabel').html(countPresentTense(rawText) + " present tense");
			$('#pastLabel').html(countPastTense(rawText) + " past tense");
			$('#greekLabel').html(returnMatches('greek', rawText) + " Greek roots");
			$('#latinLabel').html(returnMatches('latin', rawText) + " Latin roots");

		}
	}

	$('.both_ribbon').fadeIn('slow');
});

function returnMatches(key, text) {
	var rgx = new RegExp('([^a-z])(' + wordArray[key].join('|') + ')(s)?', 'ig');
	return text.match(rgx).length;
}

function countPastTense(text) {
	var regex = /\b(arose|awoke|was|were|bore|beat|became|began|bent|bet|bit|bled|blew|broke|brought|built|burned|burnt|burst|bought|caught|chose|clung|came|cost|crept|cut|dealt|dug|dived|dove|did|drew|dreamed|dreamt|drank|drove|ate|fell|fed|felt|fought|found|fit|fitted|fled|flung|flew|forbade|forbad|forgot|forgave|forwent|froze|got|gave|went|ground|grew|hung|hanged|had|heard|hid|hit|held|hurt|kept|knelt|kneeled|knitted|knit|knew|laid|led|leapt|leaped|left|lent|let|lay|lit|lighted|lost|made|meant|met|paid|proved|put|quit|read|rode|rang|rose|ran|sawed|said|saw|sought|sold|sent|set|sewed|shook|shaved|sheared|shone|shined|shot|showed|shrank|shrunk|shut|sang|sank|sat|slew|slept|slid|sneaked|snuck|spoke|sped|spent|spilled|spilt|spun|spat|spit|split|spread|sprang|stood|stole|stuck|stung|stank|stunk|strewed|struck|strove|strived|swore|swept|swam|swung|took|taught|tore|told|thought|thrived|throve|threw|underwent|understood|upset|woke|waked|wore|wove|wept|won|wound|withdrew|wrung|wrote)\b/g;
	return text.match(regex).length;
}

function countPresentTense(text) {
	var regex = /\b(arise|awake|be|bear|beat|become|begin|bend|bet|bite|bleed|blow|break|bring|build|burn|burst|buy|catch|choose|cling|come|cost|creep|cut|deal|dig|dive|do|draw|dream|drink|drive|eat|fall|feed|feel|fight|find|fit|flee|fling|fly|forbid|forget|forgive|forgo|freeze|get|give|go|grind|grow|hang|have|hear|hide|hit|hold|hurt|keep|kneel|knit|know|lay|lead|leap|leave|lend|let|lie|(down)|light|lose|make|mean|meet|pay|prove|put|quit|read|ride|ring|rise|run|saw|say|see|seek|sell|send|set|sew|shake|shave|shear|shine|shoot|show|shrink|shut|sing|sink|sit|slay|sleep|slide|sneak|speak|speed|spend|spill|spin|spit|split|spread|spring|stand|steal|stick|sting|stink|strew|strike|strive|swear|sweep|swim|swing|take|teach|tear|tell|think|thrive|throw|undergo|understand|upset|wake|wear|weave|weep|win|wind|withdraw|wring|write)s?\b/g;
	return text.match(regex).length;
}


// BEGIN
var commonWords = ["Youll", "Heat", "Only", "Foot", "Miss", "Year", "Came", "Show", "Moon", "Good", "Like", "Give", "Were", "Deep", "Word", "Name", "Very", "Blue", "Just", "Form", "Much", "Full", "Stay", "That", "Help", "Your", "Line", "Long", "Turn", "Inch", "Same", "Mean", "Fact", "Move", "Tail", "Make", "When", "Word", "Does", "Tell", "Mind", "With", "Free", "Want", "Word", "Well", "Also", "Play", "Warm", "Have", "Look", "Home", "Read", "Hand", "Port", "More", "Gave", "Said", "Even", "Land", "Here", "Must", "Game", "High", "Such", "Week", "Some", "Come", "Each", "What", "Done", "Went", "Able", "Kind", "East", "Need", "Rest", "Noun", "This", "Most", "From", "Star", "Plan", "Wait", "Note", "Near", "Dark", "Self", "Time", "Lead", "Head", "Unit", "Over", "Page", "Know", "Fine", "Town", "Fall", "Cold", "Grow", "Pull", "Rule", "They", "Road", "Love", "Food", "Than", "Four", "Slow", "Call", "Keep", "Will", "Gold", "Last", "Door", "Fill", "City", "Tree", "Down", "Word", "Hard", "Less", "Side", "Sing", "Been", "Snow", "Find", "Draw", "Left", "Late", "Many", "Five", "Fast", "West", "Hold", "Step", "Real", "Life", "Then", "Stop", "Work", "Open", "Seem", "Part", "Next", "Take", "True", "Hour", "Them", "Walk", "Best", "Ease", "Size", "King", "Boat", "Farm", "Pass", "Both", "Mark", "Book", "Knew", "Told", "Mile", "Fire", "Made", "Feet", "Care", "Rock", "Half", "Area", "Took", "Rain", "Live", "Room", "Ship", "Wind", "Idea", "Fish", "Song", "Pose", "Once", "Base", "Hear", "Test", "Busy", "Sure", "Body", "Soon", "Face", "Wood", "Main", "Bird", "Talk", "Girl", "Feel", "List", "Back", "Ever", "Found", "Above", "Young", "There", "Usual", "Plain", "Other", "Color", "Watch", "Horse", "Which", "Bring", "North", "Leave", "Their", "About", "State", "Would", "Black", "Short", "Write", "Class", "Began", "These", "Thing", "Shape", "Could", "Carry", "Group", "Check", "Order", "River", "South", "Sound", "Piece", "Until", "Laugh", "Those", "Music", "Water", "Whole", "Often", "Paper", "Heard", "First", "Begin", "Plane", "Place", "White", "Where", "After", "Round", "Every", "Night", "Early", "Close", "Press", "Under", "Force", "Reach", "While", "Don'T", "Story", "Great", "Might", "Table", "Wheel", "Start", "Think", "Since", "Cross", "Cause", "Right", "Vowel", "Clear", "Three", "Never", "Small", "Sleep", "Quick", "Large", "Cover", "Green", "Money", "Serve", "Spell", "Plant", "Learn", "Final", "Still", "Teach", "Study", "Front", "Stood", "Voice", "Drive", "Power", "Ready", "Pound", "Light", "House", "Stand", "Field", "Earth", "Build", "Again", "World", "Point", "Among", "Mother", "Animal", "Weight", "Though", "Father", "Should", "Enough", "Family", "Direct", "Change", "Beauty", "Answer", "Notice", "Happen", "School", "Govern", "Follow", "Friend", "Appear", "Person", "Center", "Second", "Number", "Letter", "Wonder", "Always", "Minute", "Strong", "Better", "People", "Behind", "Toward", "Common", "Record", "Differ", "Street", "Simple", "Before", "During", "Course", "Little", "Travel", "Figure", "Island", "Ground", "Object", "Decide", "Listen", "Surface", "Machine", "Picture", "Correct", "Morning", "Hundred", "Nothing", "Produce", "Perhaps", "Several", "Certain", "Country", "Special", "Example", "Between", "Against", "Pattern", "Measure", "Through", "Problem", "Thought", "Science", "Product", "Contain", "Brought", "Numeral", "Develop", "Question", "Thousand", "Mountain", "Possible", "Sentence", "Complete", "Together", "Interest", "Remember", "Language", "Children"];

function frequentWords() {
	wordsonly = $('#inputbox').val().replace(/[\"\';:\.,!?]+/ig, "");
	// alert(lorem);
	var arr = wordsonly.split(/\s+/);
	var a = countvalues(arr);
	var msg = '';
	var myData = [];

	var i = 0;
	var topWords = '';


	String.prototype.hashCode = function() {
		var hash = 0;
		if (this.length === 0) return hash;
		for (i = 0; i < this.length; i++) {
			char = this.charCodeAt(i);
			hash = ((hash << 5) - hash) + char;
			hash = hash & hash; // Convert to 32bit integer
		}
		return hash;
	};



	// To see how many times each element appears
	for (var elem in a) {
		myData[i] = new word(elem, a[elem]);
		i++;
		//msg += '\n' + elem + ' : ' + a[elem];
	}
	myData.sort(sortByNumber);
	$("#occurrence").html("");
	$("#characterList").html("");
	for (var i = 0; i < myData.length; i++) {
		// msg += '\n' + myData[i].WordElem + ' : ' + (myData[i].Number);
		var trimmedWord = myData[i].WordElem.replace(/[^a-zA-Z]+/gi, "");
		if (myData[i].Number > 3 && trimmedWord.length > 3) {

			topWords = topWords + myData[i].WordElem + ',';

			if (/([A-Z]{1}[a-z]+)/.test(trimmedWord) && commonWords.indexOf(trimmedWord) == -1) {
				$("#characterList").append('<li class="character pointer" onclick="listSentences(\'' + trimmedWord + '\')">' + trimmedWord + ' <span class="characterCount">' + myData[i].Number + ' mentions</span></li>');
			}
			$("#occurrence").append("<li>" + myData[i].WordElem + " <span class=\"theCount\">" + myData[i].Number + "</span></li>");
		}
		//alert (myData[i].WordElem);
		//alert (myData[i].Number);
		//v += myData[i].WordElem + " (" + myData[i].Number + ")\n";
	}
	$("#occurrence li:even").addClass('even');
	$("#occurrence li:odd").addClass('odd');
	T('#nameColumn', 'Click a name to list all sentences where the name occurs.');


	topWordsSplit = topWords.split(',');

	//alert(topWords.hashCode());
	// ADD FREQUENTLY USED WORDS TO HASH, FIND THOSE WORDS AND HIGHLIGHT THEM
	// END
}