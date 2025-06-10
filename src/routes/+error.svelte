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
    
    /* Responsive design */
    @media (max-width: 768px) {
        
        .error-code {
            font-size: 3em;
        }
    }
</style>