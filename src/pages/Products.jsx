import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import './Products.css';

const Products = () => {
  const [expandedProduct, setExpandedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const featuredProducts = [
    {
      id: 1,
      name: 'Levocetirizine Dihydrochloride',
      therapeuticActivity: 'Anti-histamine, Anti-allergenic',
      standards: 'IP / USP',
      casNo: '130018-77-8'
    },
    {
      id: 2,
      name: 'Cetirizine Dihydrochloride',
      therapeuticActivity: 'Anti-histamine, Anti-allergenic',
      standards: 'IP / BP / EP',
      casNo: '83881-52-1'
    },
    {
      id: 3,
      name: 'Pregabalin',
      therapeuticActivity: 'Anticonvulsant',
      standards: 'IP / EP',
      casNo: '148553-50-8'
    },
    {
      id: 4,
      name: 'Levosalbutamol Sulphate',
      therapeuticActivity: 'ANTI-ASTHAMATIC',
      standards: 'IP',
      casNo: '148563-16-0'
    },
    {
      id: 5,
      name: 'Salbutamol Sulphate',
      therapeuticActivity: 'ANTI-ASTHAMATIC',
      standards: 'IP',
      casNo: '51022-70-9'
    },
    {
      id: 6,
      name: 'Vitamin D3',
      therapeuticActivity: 'Essential Vitamin',
      standards: 'USP / IP',
      casNo: '67-97-0'
    }
  ];

  const allProducts = [
    { name: 'ACEBROPHYLLINE IH', standards: 'IP' },
    { name: 'ADAPALENE BP', standards: 'BP' },
    { name: 'AMBROXOL HCL IH', standards: 'IP' },
    { name: 'AMITRIPTYLINE HCL BP', standards: 'BP' },
    { name: 'AMLOFINE', standards: 'IP' },
    { name: 'ATOROCHLORIDE IP', standards: 'IP' },
    { name: 'AMOXYCILLIN', standards: 'IP' },
    { name: 'TRIHYDRATE', standards: 'IP' },
    { name: 'IP (COMPACTED)', standards: 'IP' },
    { name: 'ATORVASTATIN', standards: 'IP' },
    { name: 'CALCIUM IP', standards: 'IP' },
    { name: 'BACLOFEN IP', standards: 'IP' },
    { name: 'BETAHISTINE', standards: 'IP' },
    { name: 'DIHYDROCHLORIDE IP', standards: 'IP' },
    { name: 'BILASTINE IHS', standards: 'IHS' },
    { name: 'BISOPROLOL', standards: 'IP' },
    { name: 'FUMARATE IP', standards: 'IP' },
    { name: 'BROMHEXINE HCL IP', standards: 'IP' },
    { name: 'CALCITRIOL IP', standards: 'IP' },
    { name: 'CALCIUM DOBESILATE', standards: 'IP' },
    { name: 'CARVEDILOL IP', standards: 'IP' },
    { name: 'CHLORPHENIRAMINE', standards: 'IP' },
    { name: 'MALEATE IP', standards: 'IP' },
    { name: 'CILNIDIPINE IP', standards: 'IP' },
    { name: 'CINNARIZINE IP', standards: 'IP' },
    { name: 'CLOPAZAPINE IP', standards: 'IP' },
    { name: 'CLOZAPINE IP', standards: 'IP' },
    { name: 'CYCLOBENZAPRINE', standards: 'IP' },
    { name: 'HCL USP', standards: 'USP' },
    { name: 'CYPROHEPTADINE HCL', standards: 'IP' },
    { name: 'DARIFENACIN', standards: 'IP' },
    { name: 'HYDROBROMIDE', standards: 'IP' },
    { name: 'DESLORATADINE', standards: 'IP' },
    { name: 'DESVENLAFAXINE', standards: 'IP' },
    { name: 'SUCCINATE', standards: 'IP' },
    { name: 'DEXTROMETHORPHAN', standards: 'IP' },
    { name: 'HYDROBROMIDE IP', standards: 'IP' },
    { name: 'DIACERIEN IP', standards: 'IP' },
    { name: 'DOMEPERDONE IP', standards: 'IP' },
    { name: 'DONEPEZIL HYDROCHLORIDE', standards: 'IP' },
    { name: 'HYDROCHLORIDE IP (2022)', standards: 'IP' },
    { name: 'DOTHIEPIN HCL IP', standards: 'IP' },
    { name: 'DOXYLAMINE', standards: 'IP' },
    { name: 'SUCCINATE USP', standards: 'USP' },
    { name: 'DULOXETINE HCL IP', standards: 'IP' },
    { name: 'DUTASTERIDE IP', standards: 'IP' },
    { name: 'EBASTINE', standards: 'IP' },
    { name: 'ESCITALOPRAM OXALATE IP', standards: 'IP' },
    { name: 'ESOMEPRAZIDE', standards: 'IP' },
    { name: 'MAGNESIUM IP', standards: 'IP' },
    { name: 'ETHYLPREDNISOLONE IP', standards: 'IP' },
    { name: 'ETHOPORAM', standards: 'IP' },
    { name: 'HYDROCHLORIDE HYDRATE IP', standards: 'IP' },
    { name: 'FEBUXOSTAT', standards: 'IP' },
    { name: 'FENOFIBRATE IP (MICRONIZED)', standards: 'IP' },
    { name: 'FEXOFENADINE HCL USP/IP', standards: 'USP/IP' },
    { name: 'FLUCONAZOLE IP', standards: 'IP' },
    { name: 'FLUPENTIXOL DIHYDROCHLORIDE DIHYDRATE IP', standards: 'IP' },
    { name: 'FLUPIRTINE MALEATE IHS', standards: 'IHS' },
    { name: 'FUROSEMIDE BP/IP', standards: 'BP/IP' },
    { name: 'FUSIDIC ACID IP', standards: 'IP' },
    { name: 'GABAPENTIN IP', standards: 'IP' },
    { name: 'GLIMEPIRIDE IP', standards: 'IP' },
    { name: 'HYDROCHLOROTHIAZIDE IP', standards: 'IP' },
    { name: 'HYDROXYZINE HCL USP', standards: 'USP' },
    { name: 'IMIPRAMINE HCL IP', standards: 'IP' },
    { name: 'INDOMETACIN IP/USP/BP', standards: 'IP/USP/BP' },
    { name: 'ISOTRETINOIN IP', standards: 'IP' },
    { name: 'IVERMECTIN IP', standards: 'IP' },
    { name: 'KETOPROFEN BP', standards: 'BP' },
    { name: 'KETOROLAC TROMETHAMINE USP', standards: 'USP' },
    { name: 'LABETALOL HCL IP', standards: 'IP' },
    { name: 'LAMOTRIGINE IP', standards: 'IP' },
    { name: 'LEVOCETIRIZINE HYDROCHLORIDE IP', standards: 'IP' },
    { name: 'LEVOCETIRIZINE HYDROCHLORIDE IP (2022)', standards: 'IP' },
    { name: 'LEVOCLOPEFASTINE FENDIZOATE', standards: 'IP' },
    { name: 'LEVOSULPURIDE IHS', standards: 'IHS' },
    { name: 'LIDOCAINE HCL IP', standards: 'IP' },
    { name: 'LINEZOLID IP', standards: 'IP' },
    { name: 'LOPERAMIDE HYDROCHLORIDE IP', standards: 'IP' },
    { name: 'LORATADINE USP', standards: 'USP' },
    { name: 'LORNOXICAM IH', standards: 'IH' },
    { name: 'JULICONAZOLE IP', standards: 'IP' },
    { name: 'MECLIZINE HCL USP', standards: 'USP' },
    { name: 'MEGLUMINE USP', standards: 'USP' },
    { name: 'MELTRACEN HYDROCHLORIDE BP', standards: 'BP' },
    { name: 'MELOXICAM BP', standards: 'BP' },
    { name: 'MESALAMINE IP', standards: 'IP' },
    { name: 'METADOXINE IP', standards: 'IP' },
    { name: 'METHYLCOBALAMIN IP', standards: 'IP' },
    { name: 'METHYLPREDNISOLONE IP', standards: 'IP' },
    { name: 'METOPROLOL SUCCINATE IP', standards: 'IP' },
    { name: 'METOPROLOL TARTRATE IP', standards: 'IP' },
    { name: 'MIRTAZAPINE IP', standards: 'IP' },
    { name: 'MOMETASONE FUROATE USP (MICRONIZED)', standards: 'USP' },
    { name: 'MONOHHYDRATE IP', standards: 'IP' },
    { name: 'MUPIROCIN IP', standards: 'IP' },
    { name: 'NIFEDIPINE USP', standards: 'USP' },
    { name: 'NORTRIPTYLINE HYDROCHLORIDE', standards: 'IP' },
    { name: 'OLANAZAPINE IP', standards: 'IP' },
    { name: 'OLMESARTAN MEDOXOMIL IP', standards: 'IP' },
    { name: 'ONDANSETRON HYDROCHLORIDE DIHYDRATE IP', standards: 'IP' },
    { name: 'DIHYDRATE IP', standards: 'IP' },
    { name: 'PANTOPRAZOLE SODIUM', standards: 'IP' },
    { name: 'SESQUIHYDRATE IP', standards: 'IP' },
    { name: 'PARACETAMOL IP/BP', standards: 'IP/BP' },
    { name: 'PAROXETINE HYDROCHLORIDE', standards: 'IP' },
    { name: 'PHENYLEPHRINE HYDROCHLORIDE IP', standards: 'IP' },
    { name: 'PIRIOGLITAZONE HYDROCHLORIDE IP/BP', standards: 'IP/BP' },
    { name: 'PIROXICAM IP/BP', standards: 'IP/BP' },
    { name: 'PROGESTERONE MICRONIZED IP', standards: 'IP' },
    { name: 'PYRANTEL PAMOATE USP', standards: 'USP' },
    { name: 'QUETIAPINE FUMARATE USP (VITAMIN B2) IP', standards: 'USP/IP' },
    { name: 'RIBOFLAVIN (VITAMIN B2) IP', standards: 'IP' },
    { name: 'ROSUVASTATIN CALCIUM IP', standards: 'IP' },
    { name: 'SERTACONAZOLE NITRATE', standards: 'IP' },
    { name: 'SILDENAFIL CITRATE BP/IP', standards: 'BP/IP' },
    { name: 'SITAGLIPTIN PHOSPHATE', standards: 'IP' },
    { name: 'MONOHYDRATE IP', standards: 'IP' },
    { name: 'SULFASALAZINE IP/USP', standards: 'IP/USP' },
    { name: 'TADALAFIL USP', standards: 'USP' },
    { name: 'TAMSULOSIN HYDROCHLORIDE IP', standards: 'IP' },
    { name: 'TELMISARTAN IP', standards: 'IP' },
    { name: 'ENAGLIPTIN HYDROBROMIDE', standards: 'IP' },
    { name: 'TERBINAFINE HCL IP', standards: 'IP' },
    { name: 'THIOCOLCHICOSIDE IP', standards: 'IP' },
    { name: 'TOLPERISONE HCL JP', standards: 'JP' },
    { name: 'TOPIRAMATE IP', standards: 'IP' },
    { name: 'TRIFLUOPERAZINE HYDROCHLORIDE BP/IP', standards: 'BP/IP' },
    { name: 'HYDROCHLOR OBROMIDE', standards: 'IP' },
    { name: 'TRIHEXYPHENIDYL', standards: 'IP' },
    { name: 'HCL IP', standards: 'IP' },
    { name: 'URSODEOOXYCHOLIC ACID IP (UDCA)', standards: 'IP' },
    { name: 'VENLAFAXINE HCL', standards: 'IP' },
    { name: 'VILDAGLIPTIN IPY', standards: 'IPY' },
    { name: 'VITAMIN E 50% DRY POWDER (PHARMA GRADE)', standards: 'IP' },
    { name: 'VOGLIROSE IP', standards: 'IP' },
    { name: 'XANTHAN GUM', standards: 'IP' }
  ];

  const toggleProduct = (productId) => {
    setExpandedProduct(expandedProduct === productId ? null : productId);
  };

  const filteredAllProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.standards.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="products-page">
      <section className="page-header">
        <div className="container">
          <h1>Our Products</h1>
          <p>Pharmaceutical raw materials, chemicals & intermediates</p>
        </div>
      </section>

      <section className="featured-section">
        <div className="container">
          <Reveal className="section-header">
            <h2>Featured products</h2>
            <p>Tap a product to view activity, standards, and CAS details</p>
          </Reveal>
          <div className="featured-products-grid">
            {featuredProducts.map((product, index) => {
              const open = expandedProduct === product.id;
              return (
                <Reveal key={product.id} delay={index * 60}>
                  <button
                    type="button"
                    className={`featured-product-card ${open ? 'expanded' : ''}`}
                    onClick={() => toggleProduct(product.id)}
                    aria-expanded={open}
                  >
                    <div className="product-header">
                      <h4>{product.name}</h4>
                      <span className="expand-icon" aria-hidden="true">{open ? '−' : '+'}</span>
                    </div>
                    {open && (
                      <div className="product-details">
                        <div className="detail-item">
                          <strong>Therapeutic Activity</strong>
                          <span>{product.therapeuticActivity}</span>
                        </div>
                        <div className="detail-item">
                          <strong>Standards</strong>
                          <span>{product.standards}</span>
                        </div>
                        <div className="detail-item">
                          <strong>CAS No.</strong>
                          <span>{product.casNo}</span>
                        </div>
                      </div>
                    )}
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="all-products-section">
        <div className="container">
          <Reveal className="section-header">
            <h2>Complete product list</h2>
            <p>Search by name or standard (IP, USP, BP…)</p>
          </Reveal>

          <Reveal className="search-container">
            <input
              type="text"
              placeholder="Search products…"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <div className="search-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </div>
          </Reveal>

          <div className="products-list">
            {filteredAllProducts.map((product, index) => (
              <div key={`${product.name}-${index}`} className="product-list-item">
                <h4>{product.name}</h4>
                <span className="product-standard">{product.standards}</span>
              </div>
            ))}
          </div>

          {filteredAllProducts.length === 0 && (
            <div className="no-results">
              <p>No products found matching “{searchTerm}”</p>
              <button type="button" onClick={() => setSearchTerm('')} className="btn btn-outline">
                Clear Search
              </button>
            </div>
          )}

          <div className="products-count">
            Showing {filteredAllProducts.length} of {allProducts.length} products
          </div>
        </div>
      </section>

      <section className="products-cta-banner">
        <div className="container">
          <Reveal className="products-cta-inner">
            <h2>Need a custom product?</h2>
            <p>Contact us for custom requirements and bulk orders</p>
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Products;
