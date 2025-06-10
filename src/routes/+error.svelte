<script>
    import { page } from '$app/state';
</script>

<div id="content">
    <div class="error-container">
        
        <h1 class="error-title">
            <span>Whoops!</span>
            <span class="error-code">404</span>
        </h1>
        
        <div class="error-message">
            <p>The <strong>{page.url.pathname}</strong> page doesn't exist.</p>
            <p>It may have been moved, deleted, or you entered the wrong URL.</p>
        </div>
    </div>
</div>

<style>
    .error-container {
        text-align: center;
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
    }
    
    .error-logo {
        width: 200px;
        height: auto;
        margin: 20px auto 40px;
        display: block;
    }
    
    .error-title {
        margin-bottom: 30px;
    }
    
    .error-title span {
        display: block;
        margin-bottom: 10px;
    }
    
    .error-code {
        font-size: 4em;
        color: #b38787;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
    }
    
    .error-message {
        background-color: #f9f9f9;
        border: 2px solid #e7dada;
        border-radius: 8px;
        padding: 20px;
        margin: 30px 0;
    }
    
    .error-message p {
        margin-bottom: 15px;
        font-size: 1.1em;
    }
    
    .url-info {
        color: #666;
        font-size: 0.9em;
        font-style: italic;
    }
    
    .error-actions {
        margin: 40px 0;
    }
    
    .error-actions h2 {
        color: #b38787;
        margin-bottom: 20px;
    }
    
    .action-links {
        display: flex;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
        margin-top: 20px;
    }
    
    .action-button {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        padding: 15px 20px;
        background-color: white;
        border: 2px solid #e7dada;
        border-radius: 8px;
        text-decoration: none;
        color: #b38787;
        font-weight: bold;
        transition: all 0.3s ease;
        min-width: 120px;
    }
    
    .action-button:hover {
        background-color: #b38787;
        color: white;
        border-color: #b38787;
        text-decoration: none;
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
    
    .action-button.primary {
        background-color: #b38787;
        color: white;
        border-color: #b38787;
    }
    
    .action-button.primary:hover {
        background-color: #9a7171;
        border-color: #9a7171;
    }
    
    .action-button img {
        width: 40px;
        height: auto;
        margin-bottom: 10px;
    }
    
    .help-section {
        background-color: #f5f5f5;
        border-radius: 8px;
        padding: 30px;
        margin-top: 40px;
        text-align: left;
    }
    
    .help-section h3 {
        color: #b38787;
        text-align: center;
        margin-bottom: 20px;
    }
    
    .help-section ul {
        list-style-type: disc;
        margin-left: 20px;
        margin-bottom: 20px;
    }
    
    .help-section li {
        margin-bottom: 8px;
    }
    
    .help-section p:last-child {
        text-align: center;
        font-weight: bold;
        color: #b38787;
        margin-bottom: 0;
    }
    
    /* Responsive design */
    @media (max-width: 768px) {
        .action-links {
            flex-direction: column;
            align-items: center;
        }
        
        .action-button {
            width: 200px;
        }
        
        .error-code {
            font-size: 3em;
        }
    }
</style>